import { MessageCircle, Phone, Clock } from "lucide-react";
import { PHOTOS, WHATSAPP_DISPLAY, wa } from "@/lib/roncar";
import { Reveal } from "./Reveal";

export function Contact() {
  return (
    <section id="contato" className="relative isolate overflow-hidden border-t border-border/50">
      <img
        src={PHOTOS.silver}
        alt="Veículo com pintura espelhada finalizado pela RONCAR"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-[var(--gradient-hero)]" />

      <div className="relative mx-auto max-w-4xl px-4 py-24 text-center sm:px-6 sm:py-32">
        <Reveal>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            Seu carro merece esse cuidado.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
            Chame a gente no WhatsApp, conte o que o seu veículo precisa e nossa equipe indica o
            melhor serviço e o melhor horário para você.
          </p>
        </Reveal>

        <Reveal delay={90}>
          <a
            href={wa("Olá, RONCAR! Quero cuidar do meu carro. Podemos agendar?")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-accent px-9 py-5 font-display text-base font-extrabold uppercase tracking-[0.12em] text-accent-foreground shadow-[0_22px_60px_-20px_var(--accent)] transition-transform duration-300 hover:-translate-y-1 hover:brightness-110"
          >
            <MessageCircle className="h-5 w-5" />
            Agendar pelo WhatsApp
          </a>
        </Reveal>

        <Reveal delay={140}>
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-border bg-card/80 p-6 backdrop-blur">
              <Phone className="mx-auto h-5 w-5 text-accent" />
              <h3 className="mt-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                WhatsApp
              </h3>
              <p className="mt-1 font-display text-2xl font-bold text-foreground">
                {WHATSAPP_DISPLAY}
              </p>
            </div>
            <div className="rounded-3xl border border-border bg-card/80 p-6 backdrop-blur">
              <Clock className="mx-auto h-5 w-5 text-accent" />
              <h3 className="mt-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Atendimento
              </h3>
              <p className="mt-1 text-sm text-foreground">
                Segunda a sábado: 08:00 às 18:00
                <br />
                Domingo: 08:00 às 13:00
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
