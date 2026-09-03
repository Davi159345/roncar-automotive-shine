import logo from "@/assets/logo.jpg.asset.json";
import store from "@/assets/store.jpg.asset.json";
import green from "@/assets/green.jpg.asset.json";
import silver from "@/assets/silver.jpg.asset.json";
import porsche from "@/assets/porsche.jpg.asset.json";
import moto from "@/assets/moto.jpg.asset.json";
import tucson1 from "@/assets/tucson1.jpg.asset.json";
import tucson2 from "@/assets/tucson2.jpg.asset.json";
import tucson3 from "@/assets/tucson3.jpg.asset.json";
import tucson4 from "@/assets/tucson4.jpg.asset.json";

export const LOGO = logo.url;

export const PHOTOS = {
  store: store.url,
  green: green.url,
  silver: silver.url,
  porsche: porsche.url,
  moto: moto.url,
  tucson1: tucson1.url,
  tucson2: tucson2.url,
  tucson3: tucson3.url,
  tucson4: tucson4.url,
};

export const WHATSAPP_NUMBER = "5521969661616";
export const WHATSAPP_DISPLAY = "(21) 96966-1616";

export const wa = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const WA_DEFAULT = wa(
  "Olá! Vim pelo site da RONCAR e gostaria de agendar um serviço para o meu veículo.",
);

export const INSTAGRAM_URL = "https://www.instagram.com/roncaresteticaautomotiva/";
export const ADDRESS = "Rua Geraldo Martins, 494 — Icaraí, Niterói - RJ, 24220-070";
export const MAPS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=" +
  encodeURIComponent("Rua Geraldo Martins, 494, Icaraí, Niterói - RJ, 24220-070");
export const MAPS_EMBED =
  "https://www.google.com/maps?q=" +
  encodeURIComponent("Rua Geraldo Martins, 494, Icaraí, Niterói - RJ, 24220-070") +
  "&output=embed";

export const NAV = [
  { label: "Início", href: "#inicio" },
  { label: "Por que confiar", href: "#confianca" },
  { label: "Serviços", href: "#servicos" },
  { label: "Sobre nós", href: "#sobre" },
  { label: "Avaliações", href: "#avaliacoes" },
  { label: "Galeria", href: "#galeria" },
  { label: "Instagram", href: "#instagram" },
  { label: "Localização", href: "#localizacao" },
  { label: "Contato", href: "#contato" },
];

export const SERVICES = [
  {
    name: "Lavagem automotiva",
    desc: "Lavagem cuidadosa e detalhada, respeitando cada acabamento do seu veículo.",
    icon: "droplets",
  },
  {
    name: "Higienização",
    desc: "Limpeza profunda de estofados, carpetes e interior, devolvendo o frescor da cabine.",
    icon: "sparkles",
  },
  {
    name: "Polimento",
    desc: "Correção da pintura para remover marcas e recuperar o brilho original.",
    icon: "disc",
  },
  {
    name: "Enceramento",
    desc: "Proteção e realce da cor, com aquele acabamento espelhado que salta aos olhos.",
    icon: "shield",
  },
  {
    name: "Vitrificação",
    desc: "Camada de proteção de alta durabilidade, com brilho intenso e maior resistência.",
    icon: "gem",
  },
  {
    name: "Detalhamento automotivo",
    desc: "Trabalho minucioso ponto a ponto, do farol à roda, no padrão RONCAR.",
    icon: "wrench",
  },
];

export const REVIEWS = [
  {
    name: "Léo Florindo",
    when: "10 meses atrás",
    text: "Realizei o serviço de vitrificação na minha RAV4 2013 que estava com a pintura danificada após lavar num lava jato não qualificado. Foi um investimento ao qual não me arrependo de ter realizado pois não tenho pretensão de me desfazer da minha RAV. Parabéns aos profissionais da RONCAR.",
  },
  {
    name: "Rogerio Mouffron",
    when: "um ano atrás",
    text: "Melhor empresa de estética automotiva q eu conheço, do atendimento aos serviços, tudo impecável!!!",
  },
  {
    name: "Júlia Quintanilha",
    when: "um ano atrás",
    text: "Serviço de altíssima qualidade! A equipe demonstrou muito profissionalismo e atenção aos detalhes.",
  },
  {
    name: "Bruno Paz",
    when: "4 meses atrás",
    text: "Experiência incrível, o Diego é um ótimo profissional e deu total suporte, trabalho muito bem feito do pessoal. Estão de parabéns!",
  },
  {
    name: "Beatriz Sant'Anna",
    when: "3 meses atrás",
    text: "Super indico!! O atendimento, em especial o Ellison é muito atencioso! Confio de olhos fechados",
  },
  {
    name: "josivaldo rodrigues",
    when: "3 meses atrás",
    text: "Atendimento excelente e qualidade impecável no serviço. Super recomendo.",
  },
  {
    name: "Ricardo Sardela",
    when: "4 meses atrás",
    text: "Lugar muito bom. Com pessoas super atenciosas e educadas. Muito bom o serviço.",
  },
];

export const GALLERY = [
  { src: PHOTOS.store, alt: "Fachada e box de atendimento da RONCAR Estética Automotiva", span: "lg" },
  { src: PHOTOS.green, alt: "Veículo escuro em processo de detalhamento na RONCAR" },
  { src: PHOTOS.porsche, alt: "Porsche Panamera finalizado na RONCAR" },
  { src: PHOTOS.silver, alt: "Hatch prata com pintura espelhada após serviço RONCAR" },
  { src: PHOTOS.moto, alt: "Moto BMW GS Trophy atendida na RONCAR" },
  { src: PHOTOS.tucson1, alt: "Hyundai Tucson após lavagem completa" },
  { src: PHOTOS.tucson2, alt: "Hyundai Tucson com portas abertas em higienização" },
  { src: PHOTOS.tucson3, alt: "Interior do Hyundai Tucson higienizado" },
  { src: PHOTOS.tucson4, alt: "Lateral do Hyundai Tucson finalizada" },
];
