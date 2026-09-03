import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { GALLERY } from "@/lib/roncar";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const current = active !== null ? GALLERY[active] : undefined;

  return (
    <section id="galeria" className="relative border-t border-border/50 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-accent">Nosso trabalho</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            Galeria
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Veículos reais atendidos na RONCAR. Clique em uma foto para ampliar.
          </p>
        </Reveal>

        <div className="mt-12 grid auto-rows-[180px] grid-cols-2 gap-3 sm:auto-rows-[220px] lg:grid-cols-4 lg:gap-4">
          {GALLERY.map((photo, i) => (
            <button
              key={photo.src}
              type="button"
              onClick={() => setActive(i)}
              className={cn(
                "group relative overflow-hidden rounded-2xl border border-border transition-all duration-500 hover:border-accent/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent",
                photo.span === "lg" && "col-span-2 row-span-2",
                i === 1 && "lg:row-span-2",
              )}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <span className="absolute inset-x-4 bottom-4 translate-y-3 text-left text-xs font-medium text-foreground opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                {photo.alt}
              </span>
            </button>
          ))}
        </div>
      </div>

      {current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={current.alt}
          onClick={() => setActive(null)}
          className="fixed inset-0 z-[60] flex animate-in fade-in items-center justify-center bg-background/95 p-4 backdrop-blur-sm duration-300"
        >
          <button
            type="button"
            aria-label="Fechar"
            className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-accent hover:text-accent"
            onClick={() => setActive(null)}
          >
            <X className="h-5 w-5" />
          </button>
          <figure className="max-h-[88vh] max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <img
              src={current.src}
              alt={current.alt}
              className="max-h-[80vh] w-auto rounded-2xl border border-border object-contain"
            />
            <figcaption className="mt-3 text-center text-sm text-muted-foreground">
              {current.alt}
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}
