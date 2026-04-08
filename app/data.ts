export type Noticia = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  author: string;
  image: { src: string; alt: string };
  body: string;
};

export const noticias: Noticia[] = [
  {
    slug: "energia-solar-2025",
    title: "Energia solar atinge novo recorde no Brasil em 2025",
    excerpt: "Capacidade instalada supera 30 GW, com crescimento de 40%",
    category: "Energia",
    date: "2025-02-01",
    author: "Filipe Borelli",
    image: {
      src: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800",
      alt: "Paineis solares em campo sob céu azul.",
    },
    body: "O Brasil alcançou em 2025 um novo marco na geração de energia solar. A capacidade instalada superou 30 GW.",
  },
  {
    slug: "amazonia-desmatamento",
    title: "Amazônia: menor taxa de desmatamento em seis anos",
    excerpt: "Dados do INPE mostram redução de 22% na área desmatada.",
    category: "Biodiversidade",
    date: "2025-01-28",
    author: "João Santos",
    image: {
      src: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800",
      alt: "Floresta amazônica vista de cima",
    },
    body: "O INPE divulgou que a taxa de desmatamento na Amazônia Legal em 2024 foi a menor dos últimos seis anos.",
  },
  {
    slug: "reciclagem-plastico",
    title: "Nova política de reciclagem de plástico entra em vigor",
    excerpt: "Lei estabelece metas de uso de material reciclado até 2030.",
    category: "Resíduos",
    date: "2025-01-25",
    author: "Ana Costa",
    image: {
      src: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800",
      alt: "Plástico sendo reciclado",
    },
    body: "A nova lei estabelece metas progressivas de uso de material reciclado em embalagens até 2030.",
  },
  {
    slug: "amazonia-desmatamento-2",
    title: "Amazônia: menor taxa de desmatamento em seis anos",
    excerpt: "Dados do INPE mostram redução de 22% na área desmatada.",
    category: "Biodiversidade",
    date: "2025-01-28",
    author: "João Santos",
    image: {
      src: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800",
      alt: "Floresta amazônica vista de cima",
    },
    body: "O INPE divulgou que a taxa de desmatamento na Amazônia Legal em 2024 foi a menor dos últimos seis anos.",
  },
  {
    slug: "reciclagem-plastico-3",
    title: "Nova política de reciclagem de plástico entra em vigor",
    excerpt: "Lei estabelece metas de uso de material reciclado até 2030.",
    category: "Resíduos",
    date: "2025-01-25",
    author: "Ana Costa",
    image: {
      src: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800",
      alt: "Plástico sendo reciclado",
    },
    body: "A nova lei estabelece metas progressivas de uso de material reciclado em embalagens até 2030.",
  },
];

function formatarData(s: string) {
  return new Date(s + "T12:00:00").toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export { formatarData };
