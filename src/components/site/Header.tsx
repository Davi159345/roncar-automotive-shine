import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { LOGO, NAV, WA_DEFAULT, openExternalLink } from "@/lib/roncar";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-border/60 bg-background/85 backdrop-blur-xl shadow-[0_10px_40px_-24px_rgba(0,0,0,0.9)]"
          : "border-b border-transparent bg-gradient-to-b from-background/80 to-transparent",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <a href="#inicio" className="flex min-w-0 items-center gap-3">
          <img
            src={LOGO}
            alt="RONCAR Estética Automotiva"
            className="h-11 w-11 shrink-0 rounded-full ring-1 ring-accent/40 sm:h-12 sm:w-12"
          />
          <span className="min-w-0">
            <span className="block truncate font-display text-base font-extrabold tracking-[0.16em] text-foreground sm:text-lg">
              RONCAR
            </span>
            <span className="block truncate text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              Estética Automotiva
            </span>
          </span>
        </a>

        <nav className="ml-auto hidden items-center gap-1 xl:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground after:absolute after:inset-x-3 after:bottom-1 after:h-px after:origin-right after:scale-x-0 after:bg-accent after:transition-transform after:duration-300 hover:after:origin-left hover:after:scale-x-100"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={WA_DEFAULT}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => {
            e.preventDefault();
            openExternalLink(WA_DEFAULT);
          }}
          className="ml-auto hidden items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-xs font-bold uppercase tracking-[0.12em] text-accent-foreground shadow-[0_8px_28px_-10px_var(--accent)] transition-transform duration-300 hover:-translate-y-0.5 hover:brightness-110 xl:ml-4 xl:inline-flex cursor-pointer"
        >
          <MessageCircle className="h-4 w-4" />
          Agendar pelo WhatsApp
        </a>

        <button
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((v) => !v)}
          className="ml-auto inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border text-foreground transition-colors hover:border-accent hover:text-accent xl:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        className={cn(
          "overflow-hidden border-t border-border/60 bg-background/97 backdrop-blur-xl transition-[max-height,opacity] duration-500 xl:hidden",
          open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <nav className="flex flex-col px-4 py-3 sm:px-6">
          {NAV.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: `${i * 25}ms` }}
              className="border-b border-border/40 py-3.5 font-display text-sm font-semibold uppercase tracking-[0.14em] text-foreground/90 transition-colors last:border-0 hover:text-accent"
            >
              {item.label}
            </a>
          ))}
          <a
            href={WA_DEFAULT}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              e.preventDefault();
              setOpen(false);
              openExternalLink(WA_DEFAULT);
            }}
            className="mt-4 mb-4 inline-flex items-center justify-center gap-2 rounded-full bg-accent px-5 py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-accent-foreground cursor-pointer"
          >
            <MessageCircle className="h-4 w-4" />
            Agendar pelo WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
