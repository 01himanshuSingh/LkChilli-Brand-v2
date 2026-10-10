import { FacebookIcon, InstagramIcon } from "@/components/ui/Icons";
import { socialLinks } from "@/data/navigation";
import { cn } from "@/lib/cn";

export interface SocialIconsProps {
  className?: string;
  iconClassName?: string;
  iconSize?: number;
}

export function SocialIcons({
  className,
  iconClassName,
  iconSize = 20,
}: SocialIconsProps) {
  return (
    <div className={cn("flex items-center gap-3 xl:gap-3.5", className)}>
      {socialLinks.map((social) => {
        const icon =
          social.icon === "instagram" ? (
            <InstagramIcon className={iconClassName} size={iconSize} />
          ) : (
            <FacebookIcon className={iconClassName} size={iconSize} />
          );

        if (!social.href) {
          return (
            <span
              key={social.label}
              aria-hidden="true"
              className="inline-flex cursor-default opacity-90"
              title={social.label}
            >
              {icon}
            </span>
          );
        }

        return (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            className="inline-flex transition-opacity hover:opacity-80"
          >
            {icon}
          </a>
        );
      })}
    </div>
  );
}
