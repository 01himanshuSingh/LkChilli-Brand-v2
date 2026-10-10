"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { CloseIcon, FacebookIcon, InstagramIcon } from "@/components/ui/Icons";
import { primaryNav, secondaryNav, socialLinks } from "@/data/navigation";
import { useScrollLock } from "@/hooks/useScrollLock";

export interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useScrollLock(open);

  useEffect(() => {
    if (!open) return;

    closeRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent): void => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex h-[100dvh] w-screen flex-col bg-brand-red px-6 py-6 text-white lg:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation"
    >
      <div className="mb-10 flex items-center justify-between">
        <span className="font-serif text-lg tracking-[0.08em]">MENU</span>
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close menu"
          className="rounded-sm p-1 transition-opacity hover:opacity-80"
        >
          <CloseIcon />
        </button>
      </div>

      <nav className="flex flex-1 flex-col gap-6" aria-label="Mobile primary">
        {[...primaryNav, ...secondaryNav].map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={onClose}
            className="font-sans text-base uppercase tracking-[0.12em] transition-opacity hover:opacity-80"
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <div className="mt-auto flex items-center gap-4 border-t border-white/30 pt-6 pb-[env(safe-area-inset-bottom)]">
        {socialLinks.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            className="transition-opacity hover:opacity-80"
          >
            {social.icon === "instagram" ? <InstagramIcon /> : <FacebookIcon />}
          </a>
        ))}
      </div>
    </div>
  );
}
