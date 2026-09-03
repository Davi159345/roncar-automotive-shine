import { PHOTOS, wa, openExternalLink } from "@/lib/roncar";
import { MessageCircle } from "lucide-react";
import { Reveal } from "./Reveal";

export function About() {
  const whatsappUrl = wa("Olá, RONCAR! Gostaria de falar com vocês sobre um serviço.");

  return (
    <section id="sobre" className="relative border-t border-border/50 py-24 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <Reveal>
          <div className="relative">
            <div className="overflow-hidden rounded-[2rem] border border-border">
              <img
                src={PHOTOS.green}
                alt="Profissional da RONCAR finalizando o detalhamento de um veículo"
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1200ms] hover:scale-105"
              />
            </div>
            <div className="absolute -bottom-6 -right-2 hidden w-44 overflow-hidden rounded-2xl border border-accent/40 sm:block lg:-right-8">
              <img
                src={PHOTOS.porsche}
                alt="Porsche Panamera atendido na RONCAR"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-accent">Sobre a RONCAR</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            Experiência que atravessa gerações
          </h2>
          <div className="mt-6 space-y-4 text-muted-foreground">
            <p>
              São <span className="font-semibold text-foreground">mais de 25 anos</span> de estrada
              cuidando de veículos em Icaraí, Niterói. Nesse tempo, a RONCAR se tornou referência
              para quem não abre mão de um trabalho bem feito — e para famílias inteiras que
              continuam trazendo seus carros até aqui.
            </p>
            <p>
              Paixão por carros, respeito pela sua história. É esse o princípio que orienta cada
              lavagem, cada polimento e cada vitrificação que sai das nossas mãos.
            </p>
            <p>
              Uma estrutura completa, equipe treinada e um padrão de acabamento que não depende do
              modelo do veículo: do popular ao esportivo, todo carro recebe o mesmo cuidado.
            </p>
          </div>

          <dl className="mt-9 grid grid-cols-2 gap-4 sm:max-w-md">
            <div className="rounded-2xl border border-border bg-card p-5">
              <dt className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Experiência
              </dt>
              <dd className="mt-1 font-display text-3xl font-extrabold text-accent">+25 anos</dd>
            </div>
            <div className="rounded-2xl border border-border bg-card p-5">
              <dt className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Onde estamos
              </dt>
              <dd className="mt-1 font-display text-xl font-bold text-foreground">Icaraí, Niterói</dd>
            </div>
          </dl>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              e.preventDefault();
              openExternalLink(whatsappUrl);
            }}
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-accent/50 px-6 py-3.5 text-sm font-bold uppercase tracking-[0.12em] text-accent transition-colors duration-300 hover:bg-accent hover:text-accent-foreground cursor-pointer"
          >
            <MessageCircle className="h-4 w-4" />
            Fale com a RONCAR
          </a>
        </Reveal>
      </div>
    </section>
  );
}
