import { Container } from "@/components/ui/Container";
import { monodoseColumns } from "@/data/about";

export function MonodoseDetails() {
  return (
    <section className="bg-white py-12 sm:py-14 lg:py-16" aria-label="Monodose details">
      <Container className="max-w-about">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-8 lg:gap-10">
          {monodoseColumns.map((column) => (
            <div key={column.id} className="text-left">
              {column.title ? (
                <h3 className="mb-3 font-serif text-lg 2xl:text-[20px] font-normal text-text-heading">
                  {column.title}
                </h3>
              ) : null}

              {/* Mobile / tablet: natural wrapping */}
              <p className="font-sans text-[13px] font-light leading-[1.7] text-text-body sm:text-sm lg:hidden">
                {column.body}
              </p>

              {/* Desktop: reference line breaks */}
              <p className="hidden font-sans text-[13px] font-light leading-[1.7] text-text-body lg:block sm:text-sm">
                {column.bodyLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
