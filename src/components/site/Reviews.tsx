import { Star } from "lucide-react";
import { REVIEWS } from "@/lib/roncar";
import { Reveal } from "./Reveal";

function Stars({ value = 5 }: { value?: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${value} de 5 estrelas`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={
            i < Math.floor(value)
              ? "h-4 w-4 fill-accent text-accent"
              : "h-4 w-4 text-accent/35"
          }
        />
      ))}
    </div>
  );
}

export function Reviews() {
  return (
    <section
      id="avaliacoes"
      className="relative border-t border-border/50 bg-secondary/30 py-24 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-accent">Prova social</p>
          <h2 className="mt-3 max-w-3xl font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            A confiança dos nossos clientes fala por nós.
          </h2>
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-9 inline-flex flex-wrap items-center gap-6 rounded-3xl border border-accent/35 bg-[var(--gradient-panel)] px-8 py-6">
            <div>
              <span className="font-display text-5xl font-extrabold leading-none text-accent">
                4,5
              </span>
              <span className="ml-1 text-lg text-muted-foreground">/ 5</span>
              <div className="mt-2">
                <Stars value={4.5} />
              </div>
            </div>
            <div className="h-12 w-px bg-border" />
            <div>
              <span className="block font-display text-2xl font-bold text-foreground">325</span>
              <span className="text-sm text-muted-foreground">avaliações no Google</span>
            </div>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((r, i) => (
            <Reveal key={r.name} delay={i * 60}>
              <figure className="flex h-full flex-col rounded-3xl border border-border bg-card p-7 transition-all duration-500 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[var(--shadow-card)]">
                <Stars />
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground/85">
                  “{r.text}”
                </blockquote>
                <figcaption className="mt-6 border-t border-border/60 pt-4">
                  <span className="block font-display text-sm font-bold text-foreground">
                    {r.name}
                  </span>
                  <span className="text-xs text-muted-foreground">{r.when}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
