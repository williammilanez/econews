import Header from "@/app/components/Header";
import SkipLink from "@/app/components/SkipLink";

import { formatarData, getNoticia } from "@/app/data";

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = { params: { slug: string } };

export default function NoticiaPage({ params }: Props) {
  const { slug } = params;
  const n = getNoticia(slug);

  if (!n) notFound();

  return (
    <>
      <SkipLink />
      <Header />
      <main id="conteudo" className="main">
        <nav className="breadcrumb" aria-label="Você está em">
          <Link href="/">Início</Link>
          <span> &gt; </span>
          <span aria-current="page">{n.title}</span>
        </nav>

        <article>
          <span className="article-category">{n.category}</span>

          <h1 className="article-title">{n.title}</h1>

          <p className="article-meta">
            <time dateTime={n.date}>{formatarData(n.date)}</time> · {n.author}
          </p>

          <figure className="article-figure">
            <Image
              src={n.image.src}
              alt={n.image.alt}
              width={800}
              height={450}
              sizes="(max-width: 768px) 100vw, 672px"
              priority
            />
            <figcaption className="article-figcaption">
              {n.image.alt}
            </figcaption>
          </figure>

          <div className="article-body">
            <p>{n.body}</p>
          </div>

          <p>
            <Link href="/" className="back-link">
              ← Voltar para a página inicial
            </Link>
          </p>
        </article>
      </main>
    </>
  );
}
