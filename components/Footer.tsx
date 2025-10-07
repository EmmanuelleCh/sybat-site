import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-16 border-t bg-[#6D94C5]">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 font-extrabold text-[#1F2A44]">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded bg-[#3E6AE1] text-white">
                S
              </span>
              SYBAT
            </div>
            <p className="mt-3 text-sm text-slate-600">
              Notre implantation géographique nous permet de répondre aux
              interventions les plus urgentes dans les plus brefs délais. Les
              horaires d’ouverture de nos bureaux sont du lundi au vendredi de
              7h30 à 18h30.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-[#1F2A44]">Société</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>
                <Link href="/apropos">À propos</Link>
              </li>
              <li>
                <Link href="/activites">Réalisations</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
              <li>
                <div>
                  <Link href="/recrutement" className=" text-slate-600">
                    Rejoignez notre équipe
                  </Link>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-[#1F2A44]">Contact</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>45, rue du Pont d'argenteuil 92230 Gennevilliers</li>
              <li>
                Tél :{" "}
                <a href="tel:+33000000000" className="text-[#3E6AE1]">
                  0147397374
                </a>
              </li>
              <li>
                Email :{" "}
                <a href="mailto:contact@sybat.fr" className="text-[#3E6AE1]">
                  sybat@sybat.fr
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-[#1F2A44]">Légal</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>
                <Link href="/mentions-legales">Mentions légales</Link>
              </li>
              <li>
                <Link href="/politique-confidentialite">Confidentialité</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 text-xs text-slate-500">
          © {new Date().getFullYear()} SYBAT. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
