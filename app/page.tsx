import Featured from "./components/Featured";
import Header from "./components/Header";
import NewsGrid from "./components/NewsGrid";
import SkipLink from "./components/SkipLink";

import { noticias } from "./data";

export default function Home() {
  const featuredNews = noticias[0];

  return (
    <>
      <SkipLink />
      <Header />
      <main id="conteudo" className="main">
        {featuredNews && <Featured news={featuredNews} />}
        <NewsGrid items={noticias} />
      </main>
    </>
  );
}
