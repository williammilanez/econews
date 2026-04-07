"use client";

import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <Link
          href="/"
          className="logo-link"
          aria-label="Econews - Ir para o início"
        >
          <Image src="/logo-econews.svg" alt="Econews" width={36} height={36} />
          EcoNews
        </Link>

        <form
          role="search"
          className="search-form"
          onSubmit={(e) => e.preventDefault()}
        >
          <label htmlFor="busca">Buscar notícias</label>
          <input
            id="busca"
            type="search"
            placeholder="Ex.: Energia solar"
            className="search-input"
          />
          <button type="submit" className="search-btn">
            Buscar
          </button>
        </form>
      </div>
    </header>
  );
}
