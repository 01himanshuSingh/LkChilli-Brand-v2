import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SocialIcons } from "@/components/ui/SocialIcons";
import { footerContact, footerPages } from "@/data/footer";

/** Match header nav type scale */
const footerLinkClass =
  "font-sans text-[0.75rem] tracking-[0.02em] transition-opacity hover:opacity-80 hover:underline underline-offset-2 lg:text-[0.8125rem] xl:text-[0.875rem] 2xl:text-[0.9375rem]";

const footerHeadingClass =
  "mb-3 border-b border-white/80 pb-2 font-serif text-[0.8125rem] uppercase tracking-[0.08em] lg:text-[0.875rem] xl:text-[0.9375rem] 2xl:text-base";

export function Footer() {
  return (
    <footer className="bg-brand-red text-white">
      <Container className="flex flex-col items-start gap-8 py-12 text-left sm:gap-10 sm:py-14 md:flex-row md:justify-between md:gap-8 md:py-16 lg:gap-10 lg:py-[4.5rem] xl:py-20">
        <div className="flex w-full shrink-0 justify-start md:w-auto">
          <Image
            src="/images/footer_logo.png"
            alt="LK Chilli"
            width={1089}
            height={976}
            className="h-16 w-auto object-contain sm:h-[4.5rem] md:h-20 lg:h-[5.5rem] xl:h-24 2xl:h-28"
          />
        </div>

        <div className="w-full min-w-0 md:w-auto md:min-w-[10rem]">
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

        <div className="w-full min-w-0 md:w-auto md:min-w-[8rem]">
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

        <SocialIcons
          className="justify-start md:pt-1"
          iconClassName="h-[18px] w-[18px] xl:h-5 xl:w-5 2xl:h-6 2xl:w-6"
        />
      </Container>
    </footer>
  );
}
