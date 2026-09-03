import { LOGO, NAV, ADDRESS, WHATSAPP_DISPLAY, WA_DEFAULT, INSTAGRAM_URL } from "@/lib/roncar";
import { MessageCircle, Instagram, MapPin, Phone, ShieldCheck, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-border/60 bg-background/95 pt-16 pb-12 text-muted-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Col 1: Brand */}
          <div className="space-y-4">
            <a href="#inicio" className="flex items-center gap-3">
              <img
                src={LOGO}
                alt="RONCAR Estética Automotiva"
                className="h-12 w-12 rounded-full ring-1 ring-accent/40"
              />
              <div>
                <span className="block font-display text-lg font-extrabold tracking-[0.16em] text-foreground">
                  RONCAR
                </span>
                <span className="block text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                  Estética Automotiva
                </span>
              </div>
            </a>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Mais de 25 anos de tradição em Icaraí, Niterói. Cuidando de cada veículo com dedicação,
              produtos de ponta e acabamento impecável.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={WA_DEFAULT}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp da RONCAR"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card text-foreground transition-all hover:border-accent hover:text-accent hover:shadow-[0_0_15px_rgba(245,166,35,0.25)]"
              >
                <MessageCircle className="h-4.5 w-4.5" />
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da RONCAR"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card text-foreground transition-all hover:border-accent hover:text-accent hover:shadow-[0_0_15px_rgba(245,166,35,0.25)]"
              >
                <Instagram className="h-4.5 w-4.5" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="font-display text-xs font-bold uppercase tracking-[0.2em] text-foreground">
              Navegação
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {NAV.slice(0, 6).map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="transition-colors hover:text-accent"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services */}
          <div>
            <h4 className="font-display text-xs font-bold uppercase tracking-[0.2em] text-foreground">
              Destaques
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a href="#servicos" className="transition-colors hover:text-accent">
                  Vitrificação de Pintura
                </a>
              </li>
              <li>
                <a href="#servicos" className="transition-colors hover:text-accent">
                  Polimento Técnico
                </a>
              </li>
              <li>
                <a href="#servicos" className="transition-colors hover:text-accent">
                  Higienização Interna Completa
                </a>
              </li>
              <li>
                <a href="#servicos" className="transition-colors hover:text-accent">
                  Lavagem Detalhada
                </a>
              </li>
              <li>
                <a href="#servicos" className="transition-colors hover:text-accent">
                  Enceramento Protetor
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Schedule */}
          <div>
            <h4 className="font-display text-xs font-bold uppercase tracking-[0.2em] text-foreground">
              Atendimento
            </h4>
            <div className="mt-4 space-y-3 text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span>{ADDRESS}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-accent" />
                <span className="font-semibold text-foreground">{WHATSAPP_DISPLAY}</span>
              </div>
              <div className="pt-2">
                <span className="block text-xs font-medium text-foreground">Horário:</span>
                <span className="block text-xs text-muted-foreground">
                  Seg a Sáb: 08h às 18h | Dom: 08h às 13h
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/50 pt-8 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} RONCAR Estética Automotiva. Todos os direitos reservados.</p>
          <p className="flex items-center gap-1">
            Feito com <Heart className="h-3.5 w-3.5 fill-accent text-accent" /> para apaixonados por carros
          </p>
        </div>
      </div>
    </footer>
  );
}
