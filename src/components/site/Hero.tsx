import { MessageCircle, ChevronDown } from "lucide-react";
import { PHOTOS, WA_DEFAULT, openExternalLink } from "@/lib/roncar";

export function Hero() {
  return (
    <section id="inicio" className="relative isolate min-h-[100svh] overflow-hidden">
      <img
        src={PHOTOS.store}
        alt="Fachada iluminada da RONCAR Estética Automotiva em Icaraí, Niterói"
        className="absolute inset-0 h-full w-full object-cover object-center"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-[var(--gradient-hero)]" />
      <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_0%,transparent_20%,var(--background)_98%)]" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-4 pt-28 pb-24 sm:px-6 lg:px-8">
        <div className="animate-hero-in max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-accent">
            Icaraí · Niterói - RJ
          </span>

          <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.02] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            RONCAR
            <span className="block text-accent">Estética Automotiva</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-foreground/80 sm:text-xl">
            Mais de 25 anos de experiência cuidando do seu veículo.
          </p>
          <p className="mt-3 max-w-xl text-base text-muted-foreground">
            Cada carro que entra aqui sai com o padrão que construímos ao longo de décadas:
            acabamento impecável, atenção a cada detalhe e o respeito que a sua história sobre rodas
            merece.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={WA_DEFAULT}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                e.preventDefault();
                openExternalLink(WA_DEFAULT);
              }}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-4 text-sm font-bold uppercase tracking-[0.12em] text-accent-foreground shadow-[0_18px_45px_-18px_var(--accent)] transition-transform duration-300 hover:-translate-y-0.5 hover:brightness-110 cursor-pointer"
            >
              <MessageCircle className="h-4.5 w-4.5" />
              Agendar pelo WhatsApp
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-foreground/25 bg-foreground/5 px-7 py-4 text-sm font-bold uppercase tracking-[0.12em] text-foreground backdrop-blur transition-colors duration-300 hover:border-accent hover:text-accent"
            >
              Conhecer nossos serviços
            </a>
          </div>

          <div className="mt-12 flex items-center gap-5">
            <div className="rounded-2xl border border-accent/40 bg-background/40 px-6 py-4 backdrop-blur-md">
              <span className="block font-display text-4xl font-extrabold leading-none text-accent sm:text-5xl">
                +25
              </span>
              <span className="mt-1 block text-[11px] font-semibold uppercase tracking-[0.22em] text-foreground/75">
                anos de experiência
              </span>
            </div>
            <p className="max-w-[15rem] text-sm text-muted-foreground">
              Tradição em estética automotiva no coração de Icaraí.
            </p>
          </div>
        </div>
      </div>

      <a
        href="#confianca"
        aria-label="Rolar para a próxima seção"
        className="absolute inset-x-0 bottom-6 mx-auto flex w-10 justify-center text-muted-foreground transition-colors hover:text-accent"
      >
        <ChevronDown className="h-6 w-6 animate-bounce" />
      </a>
    </section>
  );
}
