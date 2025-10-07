import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/60 backdrop-blur">
      <div className="mx-auto max-w px-4 h-16 flex items-center justify-between">
        {/* Logo (cliquable vers l'accueil si tu veux) */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logoSybat.png"
            alt="Logo SYBAT"
            width={120}
            height={40}
            className="mr-3"
          />
        </Link>

        {/* Nav */}
        <nav className="flex gap-6 items-center">
          <Link
            href="/about"
            className="text-sm font-medium text-slate-700 hover:text-[#314A89]"
          >
            À propos
          </Link>
          <Link
            href="/activites"
            className="text-sm font-medium text-slate-700 hover:text-[#314A89]"
          >
            Réalisations
          </Link>
          <Link
            href="/contact"
            className="rounded-md bg-[#314A89] px-4 py-2 text-sm font-semibold text-white hover:opacity-90"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
