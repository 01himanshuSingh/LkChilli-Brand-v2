import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { FacebookIcon, InstagramIcon } from "@/components/ui/Icons";
import { footerContact, footerPages } from "@/data/footer";
import { socialLinks } from "@/data/navigation";

/** Match header nav type scale */
const footerLinkClass =
  "font-sans text-[0.75rem] tracking-[0.02em] transition-opacity hover:opacity-80 hover:underline underline-offset-2 lg:text-[0.8125rem] xl:text-[0.875rem] 2xl:text-[0.9375rem]";

const footerHeadingClass =
  "mb-3 border-b border-white/80 pb-2 font-serif text-[0.8125rem] uppercase tracking-[0.08em] lg:text-[0.875rem] xl:text-[0.9375rem] 2xl:text-base";

export function Footer() {
  return (
    <footer className="bg-brand-red text-white">
      <Container className="flex flex-col items-center gap-10 py-12 text-center sm:py-14 md:flex-row md:items-start md:justify-between md:gap-8 md:py-16 md:text-left lg:gap-10 lg:py-[4.5rem] xl:py-20">
        <div className="flex shrink-0 justify-center md:justify-start">
          <Image
            src="/images/footer_logo.png"
            alt="LK Chilli"
            width={1089}
            height={976}
            className="h-16 w-auto object-contain sm:h-[4.5rem] md:h-20 lg:h-[5.5rem] xl:h-24 2xl:h-28"
          />
        </div>

        <div className="min-w-[10rem]">
          <h2 className={footerHeadingClass}>Contact Us</h2>
          <ul className="space-y-2.5 lg:space-y-3">
            {footerContact.map((item) => (
              <li key={item.href}>
                <a href={item.href} className={footerLinkClass}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="min-w-[8rem]">
          <h2 className={footerHeadingClass}>{footerPages.title}</h2>
          <ul className="space-y-2.5 lg:space-y-3">
            {footerPages.links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={footerLinkClass}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-3 md:pt-1 xl:gap-3.5">
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
      </Container>
    </footer>
  );
}
