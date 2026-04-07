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
      </div>
    </header>
  );
}
