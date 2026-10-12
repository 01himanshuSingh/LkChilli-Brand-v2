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
  organisation: "",
  market: "",
  message: "",
};

const fieldClassName =
  "mt-2 w-full border-0 border-b border-text-heading/25 bg-transparent px-0 py-3 font-sans text-sm text-text-heading outline-none transition-[border-color] duration-250 placeholder:text-text-muted focus:border-brand-red";

const TOAST_MS = 4500;

export function ContactForm() {
  const { introText, fields, submitLabel, confirmationMessage, errorMessage } =
    contactContent.form;

  const [values, setValues] = useState<FormValues>(initialValues);
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [toastVisible, setToastVisible] = useState(false);

  // Clear polluted query-string from accidental native form navigations
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

    // Basic required-field guard (form has noValidate to avoid native submit UX)
    const missingRequired = fields.some(
      (field) => field.required && !values[field.name].trim(),
    );
    if (missingRequired) {
      setStatus("error");
      return;
    }

    setStatus("sending");

    // EmailJS template vars: {{name}}, {{email}}, {{organisation}}, {{market}}, {{message}}
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
          organisation: values.organisation,
          market: values.market,
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

  return (
    <section
      className="relative bg-surface-soft px-6 py-20 md:px-12 md:py-28 lg:px-16"
      aria-labelledby="contact-form-heading"
    >
      <div className="mx-auto max-w-xl">
        <h2 id="contact-form-heading" className="sr-only">
          Contact Us form
        </h2>

        {introText ? (
          <p className="mb-12 text-center font-sans text-sm font-light leading-relaxed text-text-body md:mb-14 md:text-base">
            {introText}
          </p>
        ) : null}

        {/*
          Client-only submit: no native GET/POST navigation.
          Native navigation was putting fields into the URL (?name=...).
        */}
        <form
          onSubmit={(event) => {
            event.preventDefault();
            event.stopPropagation();
            void sendEnquiry();
          }}
          noValidate
          className="space-y-10"
        >
          {fields.map((field) => (
            <FormFieldControl
              key={field.name}
              field={field}
              value={values[field.name]}
              onChange={(value) => updateField(field.name, value)}
            />
          ))}

          {status === "error" ? (
            <p className="font-sans text-sm text-brand-red" role="alert">
              {errorMessage}
            </p>
          ) : null}

          <div className="pt-4 text-center">
            <button
              type="button"
              disabled={status === "sending"}
              onClick={() => void sendEnquiry()}
              className="border border-transparent px-6 py-3 font-sans text-xs font-medium uppercase tracking-[0.28em] text-text-heading transition-[border-color] duration-250 hover:border-brand-red disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:border-transparent md:text-sm"
            >
              {status === "sending" ? "Sending…" : submitLabel}
            </button>
          </div>
        </form>
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

  return (
    <div>
      <label
        htmlFor={id}
        className="block font-sans text-[10px] font-medium uppercase tracking-[0.28em] text-text-muted md:text-xs"
      >
        {field.label}
        {field.required ? (
          <span className="text-brand-red" aria-hidden>
            {" "}
            *
          </span>
        ) : null}
      </label>

      {field.type === "textarea" ? (
        <textarea
          id={id}
          name={field.name}
          required={field.required}
          rows={5}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className={`${fieldClassName} resize-y`}
        />
      ) : (
        <input
          id={id}
          name={field.name}
          type={field.type === "email" ? "email" : "text"}
          required={field.required}
          autoComplete={field.type === "email" ? "email" : undefined}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className={fieldClassName}
        />
      )}
    </div>
  );
}
