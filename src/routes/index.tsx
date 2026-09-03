import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Trust } from "@/components/site/Trust";
import { Services } from "@/components/site/Services";
import { About } from "@/components/site/About";
import { Reviews } from "@/components/site/Reviews";
import { Gallery } from "@/components/site/Gallery";
import { InstagramSection } from "@/components/site/InstagramSection";
import { Location } from "@/components/site/Location";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen bg-background text-foreground selection:bg-accent selection:text-accent-foreground">
      <Header />
      <main id="main-content">
        <Hero />
        <Trust />
        <Services />
        <About />
        <Reviews />
        <Gallery />
        <InstagramSection />
        <Location />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
