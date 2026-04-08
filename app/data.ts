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
];
