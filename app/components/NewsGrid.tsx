import Image from "next/image";
import Link from "next/link";

import { Noticia, formatarData } from "../data";

type Props = { items: Noticia[] };

export default function NewsGrid({ items }: Props) {
  return (
    <section aria-labelledby="latest-heading">
      <h2 id="latest-heading" className="section-title">
        Últimas notícias
      </h2>
      <ul className="news-grid">
        {items.map((n) => (
          <li key={n.slug}>
            <article className="news-card">
              <Link href={`/noticia/${n.slug}`} className="news-card-link">
                <div className="card-image-wrap">
                  <Image
                    src={n.image.src}
                    alt={n.image.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 360px"
                  />
                </div>
                <div className="card-content">
                  <span className="card-category">{n.category}</span>
                  <h3 className="card-title">{n.title}</h3>
                  <p className="card-excerpt">{n.excerpt}</p>
                  <time dateTime={n.date} className="card-time">
                    {formatarData(n.date)}
                  </time>
                </div>
              </Link>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
