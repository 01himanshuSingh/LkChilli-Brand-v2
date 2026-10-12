import Image from "next/image";
import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";

export interface SplitSectionProps {
  imageSrc: string;
  imageAlt: string;
  children: ReactNode;
  /** When true, text is on the left and image on the right */
  reverse?: boolean;
  className?: string;
  imageClassName?: string;
  imageWrapperClassName?: string;
  contentClassName?: string;
  containerClassName?: string;
  priority?: boolean;
}

export function SplitSection({
  imageSrc,
  imageAlt,
  children,
  reverse = false,
  className,
  imageClassName,
  imageWrapperClassName,
  contentClassName,
  containerClassName,
  priority = false,
}: SplitSectionProps) {
  return (
    <section className={cn("bg-white", className)}>
      <Container className={cn("max-w-about", containerClassName)}>
        <div className="grid items-start gap-8 md:grid-cols-2 md:gap-10 lg:gap-14">
          <div
            className={cn(
              "relative aspect-[4/5] w-full overflow-hidden",
              reverse ? "order-2 md:order-2" : "order-1 md:order-1",
              imageWrapperClassName,
            )}
          >
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              priority={priority}
              sizes="(max-width: 768px) 100vw, 50vw"
              className={cn("object-cover", imageClassName)}
            />
          </div>

          <div
            className={cn(
              reverse ? "order-1 md:order-1" : "order-2 md:order-2",
              contentClassName,
            )}
          >
            {children}
          </div>
        </div>
      </Container>
    </section>
  );
}
