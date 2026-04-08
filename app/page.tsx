import Header from "./components/Header";
import SkipLink from "./components/SkipLink";

export default function Home() {
  return (
    <>
      <SkipLink />
      <Header />
      <main id="conteudo" className="main">
        {/* conteúdo futuro */}
      </main>
    </>
  );
}
