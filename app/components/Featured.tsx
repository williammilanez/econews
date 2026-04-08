import Image from "next/image";
import Link from "next/link";

import { formatarData, Noticia } from "../data";

type Props = {
  news: Noticia;
};

export default function Featured({ news }: Props) {
  return (
    <section className="featured" aria-labelledby="featured-heading">
      <h1 id="featured-heading" className="sr-only">
        Notícia em destaque
      </h1>
      <article className="featured-card">
        <Link href={`/noticia/${news.slug}`} className="featured-link">
          <div className="featured-image-wrap">
            <Image
              src={news.image.src}
              alt={news.image.alt}
              fill
              sizes="(max-width: 768px) 100vw, 1152px"
            />
          </div>
          <div className="featured-content">
            <span className="featured-category">{news.category}</span>
            <h2 className="featured-title">{news.title}</h2>
            <p className="featured-excerpt">{news.excerpt}</p>
            <time dateTime={news.date} className="featured-time">
              {formatarData(news.date)}
            </time>
          </div>
        </Link>
      </article>
    </section>
  );
}
