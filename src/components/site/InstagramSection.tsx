import { Instagram } from "lucide-react";
import { INSTAGRAM_URL, LOGO, PHOTOS, openExternalLink } from "@/lib/roncar";
import { Reveal } from "./Reveal";

const STRIP = [PHOTOS.silver, PHOTOS.moto, PHOTOS.tucson2, PHOTOS.green];

export function InstagramSection() {
  return (
    <section
      id="instagram"
      className="relative border-t border-border/50 bg-secondary/30 py-24 sm:py-28"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.1fr] lg:px-8">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-accent">Instagram</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            Acompanhe a RONCAR por dentro
          </h2>
          <div className="mt-6 flex items-center gap-4">
            <img
              src={LOGO}
              alt="Perfil oficial da RONCAR no Instagram"
              loading="lazy"
              className="h-16 w-16 rounded-full ring-2 ring-accent/40"
            />
            <div>
              <span className="block font-display text-lg font-bold text-foreground">
                @roncaresteticaautomotiva
              </span>
              <span className="text-sm text-muted-foreground">Perfil oficial</span>
            </div>
          </div>
          <p className="mt-6 max-w-md text-muted-foreground">
            Bastidores, veículos finalizados e o dia a dia da nossa equipe.
          </p>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              e.preventDefault();
              openExternalLink(INSTAGRAM_URL);
            }}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-7 py-4 text-sm font-bold uppercase tracking-[0.12em] text-accent-foreground shadow-[0_18px_45px_-18px_var(--accent)] transition-transform duration-300 hover:-translate-y-0.5 hover:brightness-110 cursor-pointer"
          >
            <Instagram className="h-4.5 w-4.5" />
            Ver Instagram
          </a>
        </Reveal>

        <Reveal delay={100}>
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {STRIP.map((src, i) => (
              <a
                key={src}
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  e.preventDefault();
                  openExternalLink(INSTAGRAM_URL);
                }}
                className="group relative aspect-square overflow-hidden rounded-2xl border border-border cursor-pointer"
              >
                <img
                  src={src}
                  alt={`Publicação da RONCAR no Instagram ${i + 1}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[900ms] group-hover:scale-110"
                />
                <span className="absolute inset-0 flex items-center justify-center bg-background/70 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <Instagram className="h-7 w-7 text-accent" />
                </span>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
