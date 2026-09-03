import { Award, Gem, Users, HeartHandshake, Wrench } from "lucide-react";
import { Reveal } from "./Reveal";

const ITEMS = [
  {
    icon: Gem,
    title: "Qualidade em cada detalhe",
    text: "Acabamento conferido ponto a ponto antes de qualquer veículo ser entregue.",
  },
  {
    icon: Users,
    title: "Atendimento profissional",
    text: "Equipe atenciosa, que explica o serviço e acompanha você do início ao fim.",
  },
  {
    icon: HeartHandshake,
    title: "Cuidado com seu veículo",
    text: "Produtos e técnicas adequados para cada pintura, acabamento e interior.",
  },
  {
    icon: Wrench,
    title: "Experiência em estética automotiva",
    text: "Do lava-jato ao detalhamento premium, tudo executado dentro de casa.",
  },
];

export function Trust() {
  return (
    <section id="confianca" className="relative border-t border-border/50 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-accent">Autoridade</p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            Por que confiar na RONCAR?
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          <Reveal className="lg:row-span-2">
            <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-accent/35 bg-[var(--gradient-panel)] p-8">
              <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-accent/15 blur-3xl" />
              <Award className="h-9 w-9 text-accent" />
              <div className="mt-10">
                <span className="block font-display text-7xl font-extrabold leading-none text-accent sm:text-8xl">
                  +25
                </span>
                <span className="mt-2 block font-display text-xl font-bold uppercase tracking-[0.16em] text-foreground">
                  anos de experiência
                </span>
                <p className="mt-4 text-sm text-muted-foreground">
                  Mais de duas décadas cuidando de carros e motos em Niterói — de veículos do dia a
                  dia a esportivos e importados.
                </p>
              </div>
            </div>
          </Reveal>

          {ITEMS.map((item, i) => (
            <Reveal key={item.title} delay={80 + i * 70}>
              <div className="group h-full rounded-3xl border border-border bg-card p-7 transition-all duration-500 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[var(--shadow-card)]">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/15 text-accent transition-colors duration-500 group-hover:bg-accent group-hover:text-accent-foreground">
                  <item.icon className="h-5.5 w-5.5" />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <p className="mt-12 border-l-2 border-accent pl-5 font-display text-xl font-semibold italic text-foreground sm:text-2xl">
            "Experiência que você percebe em cada detalhe."
          </p>
        </Reveal>
      </div>
    </section>
  );
}
