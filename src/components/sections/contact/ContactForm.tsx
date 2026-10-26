"use client";

import emailjs from "@emailjs/browser";
import { useEffect, useState } from "react";
import { contactContent } from "@/data/contact";
import type { ContactFormField, ContactFormFieldName } from "@/types/contact";
import { cn } from "@/lib/cn";

type FormValues = Record<ContactFormFieldName, string>;
type SubmitStatus = "idle" | "sending" | "success" | "error";

const initialValues: FormValues = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

const controlClassName =
  "w-full rounded-md border-0 bg-[#E8EBEB] px-4 py-3 font-sans text-sm text-text-heading outline-none placeholder:text-[#9a9a9a] focus-visible:ring-2 focus-visible:ring-brand-red/25";

const TOAST_MS = 4500;

export function ContactForm() {
  const {
    heading,
    introLines,
    fields,
    submitLabel,
    confirmationMessage,
    errorMessage,
  } = contactContent.form;

  const [values, setValues] = useState<FormValues>(initialValues);
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [toastVisible, setToastVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!window.location.search) return;
    window.history.replaceState({}, "", window.location.pathname);
  }, []);

  useEffect(() => {
    if (status !== "success") return;

    setToastVisible(true);
    const hideTimer = window.setTimeout(() => {
      setToastVisible(false);
      setStatus("idle");
    }, TOAST_MS);

    return () => window.clearTimeout(hideTimer);
  }, [status]);

  function updateField(name: ContactFormFieldName, value: string): void {
    setValues((prev) => ({ ...prev, [name]: value }));
  }

  async function sendEnquiry(): Promise<void> {
    if (status === "sending") return;

    const missingRequired = fields.some(
      (field) => field.required && !values[field.name].trim(),
    );
    if (missingRequired) {
      setStatus("error");
      return;
    }

    setStatus("sending");

    // EmailJS template vars: {{name}}, {{email}}, {{phone}}, {{message}}
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error(
        "[EmailJS] Missing env vars. Add NEXT_PUBLIC_EMAILJS_* keys to .env.local and restart the dev server.",
      );
      setStatus("error");
      return;
    }

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          name: values.name,
          email: values.email,
          phone: values.phone,
          message: values.message,
        },
        { publicKey },
      );
      setValues(initialValues);
      setStatus("success");
    } catch (error) {
      console.error("[EmailJS] send failed:", error);
      setStatus("error");
    }
  }

  const textFields = fields.filter((field) => field.type !== "textarea");
  const messageField = fields.find((field) => field.type === "textarea");

  return (
    <section
      className="bg-white px-5 py-14 sm:px-8 sm:py-16 md:py-20"
      aria-labelledby="contact-form-heading"
    >
      <div className="mx-auto w-full max-w-[27.5rem]">
        <h1
          id="contact-form-heading"
          className="text-center font-serif text-[2.65rem] font-semibold italic leading-none text-brand-red sm:text-[3.15rem]"
        >
          {heading}
        </h1>

        <div className="mt-8 rounded-[1.15rem] border border-brand-red px-7 pb-9 pt-8 sm:mt-10 sm:px-11 sm:pb-11 sm:pt-10">
          <p className="text-center font-sans text-[0.68rem] font-medium uppercase leading-[1.7] tracking-[0.16em] text-brand-red sm:text-xs">
            {introLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </p>

          <form
            onSubmit={(event) => {
              event.preventDefault();
              event.stopPropagation();
              void sendEnquiry();
            }}
            noValidate
            className="mt-8"
          >
            <div className="space-y-3.5">
              {textFields.map((field) => (
                <FormFieldControl
                  key={field.name}
                  field={field}
                  value={values[field.name]}
                  onChange={(value) => updateField(field.name, value)}
                />
              ))}
            </div>

            {messageField ? (
              <div className="mt-6">
                <FormFieldControl
                  field={messageField}
                  value={values[messageField.name]}
                  onChange={(value) => updateField(messageField.name, value)}
                />
              </div>
            ) : null}

            {status === "error" ? (
              <p
                className="mt-4 text-center font-sans text-xs text-brand-red"
                role="alert"
              >
                {errorMessage}
              </p>
            ) : null}

            <div className="mt-7 text-center">
              <button
                type="submit"
                disabled={status === "sending"}
                className="rounded-[4px] bg-brand-red px-9 py-2.5 font-sans text-[0.7rem] font-medium uppercase tracking-[0.16em] text-white transition-colors duration-250 hover:bg-brand-red-dark disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "sending" ? "Sending…" : submitLabel}
              </button>
            </div>
          </form>
        </div>
      </div>

      <SuccessToast
        visible={toastVisible}
        message={confirmationMessage}
        onDismiss={() => {
          setToastVisible(false);
          setStatus("idle");
        }}
      />
    </section>
  );
}

function SuccessToast({
  visible,
  message,
  onDismiss,
}: {
  visible: boolean;
  message: string;
  onDismiss: () => void;
}) {
  return (
    <div
      className={cn(
        "pointer-events-none fixed inset-x-0 bottom-6 z-50 flex justify-center px-4 transition-all duration-300 ease-out sm:bottom-8",
        visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
      )}
      aria-live="polite"
      aria-atomic="true"
    >
      <div
        className={cn(
          "pointer-events-auto flex max-w-md items-start gap-3 border border-white/15 bg-brand-red px-5 py-4 text-white shadow-[0_16px_40px_rgba(163,29,51,0.35)] sm:gap-4 sm:px-6 sm:py-5",
          !visible && "pointer-events-none",
        )}
        role="status"
      >
        <span
          className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/40 font-serif text-sm"
          aria-hidden
        >
          ✓
        </span>
        <div className="min-w-0 flex-1">
          <p className="font-serif text-base italic leading-snug sm:text-lg">
            Thank you
          </p>
          <p className="mt-1 font-sans text-xs font-light leading-relaxed text-white/90 sm:text-sm">
            {message}
          </p>
        </div>
        <button
          type="button"
          onClick={onDismiss}
          aria-label="Dismiss notification"
          className="shrink-0 font-sans text-lg leading-none text-white/70 transition-colors duration-250 hover:text-white"
        >
          ×
        </button>
      </div>
    </div>
  );
}

function FormFieldControl({
  field,
  value,
  onChange,
}: {
  field: ContactFormField;
  value: string;
  onChange: (value: string) => void;
}) {
  const id = `contact-${field.name}`;
  const showLabel = field.type === "textarea";

  return (
    <div>
      <label
        htmlFor={id}
        className={
          showLabel
            ? "mb-2 block font-sans text-[0.68rem] font-medium uppercase tracking-[0.18em] text-brand-red sm:text-xs"
            : "sr-only"
        }
      >
        {field.label}
      </label>

      {field.type === "textarea" ? (
        <textarea
          id={id}
          name={field.name}
          required={field.required}
          rows={4}
          placeholder={field.placeholder}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className={`${controlClassName} min-h-[7.25rem] resize-none leading-relaxed`}
        />
      ) : (
        <input
          id={id}
          name={field.name}
          type={field.type}
          required={field.required}
          placeholder={field.placeholder}
          autoComplete={
            field.type === "email"
              ? "email"
              : field.type === "tel"
                ? "tel"
                : "name"
          }
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className={controlClassName}
        />
      )}
    </div>
  );
}
