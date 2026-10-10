"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { FacebookIcon, InstagramIcon, MenuIcon } from "@/components/ui/Icons";
import { MobileMenu } from "@/components/layout/Header/MobileMenu";
import { primaryNav, secondaryNav, socialLinks } from "@/data/navigation";
import { useSmartHeader } from "@/hooks/useSmartHeader";
import { cn } from "@/lib/cn";

const navLinkClass =
  "font-sans text-[0.75rem] uppercase tracking-[0.12em] transition-opacity hover:opacity-80 lg:text-[0.8125rem] xl:text-[0.875rem] 2xl:text-[0.9375rem]";

const headerBarClass =
  "relative flex h-[4.25rem] items-center justify-between sm:h-[5rem] lg:h-[5.5rem] xl:h-[6rem]";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { visible, scrolled } = useSmartHeader();

  // Keep header visible while the mobile menu is open
  const showHeader = visible || menuOpen;

  return (
    <>
      {/* Spacer preserves layout height while header is fixed */}
      <div className={cn(headerBarClass, "w-full")} aria-hidden="true" />

      <header
        className={cn(
          "fixed inset-x-0 top-0 z-40 w-full bg-brand-red text-white transition-transform duration-300 ease-out will-change-transform motion-reduce:transition-none",
          showHeader ? "translate-y-0" : "-translate-y-full",
          scrolled && "shadow-md shadow-black/10",
        )}
      >
        <Container className={headerBarClass}>
          <nav
            className="hidden items-center gap-2.5 lg:flex xl:gap-3"
            aria-label="Primary"
          >
            {primaryNav.map((link, index) => (
              <span
                key={link.href}
                className="inline-flex items-center gap-2.5 xl:gap-3"
              >
                {index > 0 && (
                  <span
                    aria-hidden="true"
                    className="text-[0.8125rem] xl:text-[0.875rem]"
                  >
                    |
                  </span>
                )}
                <Link href={link.href} className={navLinkClass}>
                  {link.label}
                </Link>
              </span>
            ))}
          </nav>

          <button
            type="button"
            className="rounded-sm p-1.5 lg:hidden"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
          >
            <MenuIcon className="h-7 w-7 sm:h-8 sm:w-8" size={28} />
          </button>

          <Link
            href="/"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            aria-label="LK Chilli home"
          >
            <Image
              src="/images/Logo.png"
              alt="LK Chilli"
              width={1075}
              height={992}
              priority
              className="h-12 w-auto object-contain sm:h-14 lg:h-16 xl:h-[4.5rem] 2xl:h-20"
            />
          </Link>

          <div className="hidden items-center gap-3 lg:flex xl:gap-4">
            <nav className="flex items-center gap-2.5 xl:gap-3" aria-label="Secondary">
              {secondaryNav.map((link) => (
                <Link key={link.href} href={link.href} className={navLinkClass}>
                  {link.label}
                </Link>
              ))}
              <span
                aria-hidden="true"
                className="text-[0.8125rem] xl:text-[0.875rem]"
              >
                |
              </span>
            </nav>
            <div className="flex items-center gap-3 xl:gap-3.5">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="transition-opacity hover:opacity-80"
                >
                  {social.icon === "instagram" ? (
                    <InstagramIcon
                      className="h-[18px] w-[18px] xl:h-5 xl:w-5 2xl:h-6 2xl:w-6"
                      size={20}
                    />
                  ) : (
                    <FacebookIcon
                      className="h-[18px] w-[18px] xl:h-5 xl:w-5 2xl:h-6 2xl:w-6"
                      size={20}
                    />
                  )}
                </a>
              ))}
            </div>
          </div>

          <div className="w-8 sm:w-9 lg:hidden" aria-hidden="true" />
        </Container>

        <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
      </header>
    </>
  );
}
