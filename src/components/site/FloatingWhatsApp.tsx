import { MessageCircle } from "lucide-react";
import { WA_DEFAULT, openExternalLink } from "@/lib/roncar";

export function FloatingWhatsApp() {
  return (
    <aside aria-label="Atendimento rápido por WhatsApp" className="fixed bottom-6 right-6 z-40">
      <a
        href={WA_DEFAULT}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => {
          e.preventDefault();
          openExternalLink(WA_DEFAULT);
        }}
        aria-label="Fale conosco no WhatsApp"
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_rgba(37,211,102,0.45)] transition-all duration-300 hover:scale-110 hover:shadow-[0_15px_40px_rgba(37,211,102,0.6)] focus:outline-none focus:ring-4 focus:ring-[#25D366]/40 cursor-pointer"
      >
        <span className="absolute -inset-1 -z-10 animate-ping rounded-full bg-[#25D366] opacity-30 duration-1000" />
        <MessageCircle className="h-7 w-7 transition-transform group-hover:scale-110" />
        <span className="pointer-events-none absolute right-16 hidden whitespace-nowrap rounded-lg bg-card px-3 py-1.5 text-xs font-semibold text-foreground shadow-lg ring-1 ring-border group-hover:block sm:block">
          Agende seu serviço
        </span>
      </a>
    </aside>
  );
}
