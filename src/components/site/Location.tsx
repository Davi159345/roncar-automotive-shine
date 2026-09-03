import { MapPin, Navigation, Clock } from "lucide-react";
import { ADDRESS, MAPS_EMBED, MAPS_URL } from "@/lib/roncar";
import { Reveal } from "./Reveal";

export function Location() {
  return (
    <section id="localizacao" className="relative border-t border-border/50 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-accent">Onde estamos</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            Localização
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.4fr]">
          <Reveal>
            <div className="flex h-full flex-col gap-6 rounded-3xl border border-border bg-card p-8">
              <div className="flex gap-4">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <div className="min-w-0">
                  <h3 className="font-display text-base font-bold text-foreground">Endereço</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{ADDRESS}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <div>
                  <h3 className="font-display text-base font-bold text-foreground">
                    Horário de funcionamento
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Segunda a sábado: 08:00 às 18:00
                    <br />
                    Domingo: 08:00 às 13:00
                  </p>
                </div>
              </div>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-bold uppercase tracking-[0.12em] text-accent-foreground transition-transform duration-300 hover:-translate-y-0.5 hover:brightness-110"
              >
                <Navigation className="h-4 w-4" />
                Como chegar
              </a>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="h-[340px] overflow-hidden rounded-3xl border border-border sm:h-[420px] lg:h-full">
              <iframe
                title="Mapa da RONCAR Estética Automotiva"
                src={MAPS_EMBED}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full"
                style={{ border: 0 }}
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
