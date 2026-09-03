import { Droplets, Sparkles, Disc3, ShieldCheck, Gem, Wrench, MessageCircle } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SERVICES, wa } from "@/lib/roncar";
import { Reveal } from "./Reveal";

const ICONS: Record<string, LucideIcon> = {
  droplets: Droplets,
  sparkles: Sparkles,
  disc: Disc3,
  shield: ShieldCheck,
  gem: Gem,
  wrench: Wrench,
};

export function Services() {
  return (
    <section id="servicos" className="relative border-t border-border/50 bg-secondary/30 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-accent">O que fazemos</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            Nossos serviços
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Serviços executados com produtos adequados, processo definido e conferência final —
            do carro do dia a dia ao veículo de coleção.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => {
            const Icon = ICONS[s.icon] ?? Sparkles;
            return (
              <Reveal key={s.name} delay={i * 70}>
                <article className="group relative h-full overflow-hidden rounded-3xl border border-border bg-card p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-accent/50 hover:shadow-[var(--shadow-card)]">
                  <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <span className="inline-flex h-13 w-13 items-center justify-center rounded-2xl bg-primary/15 p-3.5 text-accent transition-all duration-500 group-hover:scale-105 group-hover:bg-accent group-hover:text-accent-foreground">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-6 font-display text-xl font-bold text-foreground">{s.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={120}>
          <div className="mt-14 flex justify-center">
            <a
              href={wa("Olá! Quero agendar um serviço na RONCAR. Pode me passar os horários?")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-sm font-bold uppercase tracking-[0.12em] text-accent-foreground shadow-[0_18px_45px_-18px_var(--accent)] transition-transform duration-300 hover:-translate-y-0.5 hover:brightness-110"
            >
              <MessageCircle className="h-4.5 w-4.5" />
              Quero agendar meu serviço
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
