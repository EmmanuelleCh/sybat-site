import Link from "next/link";

/* =========================================================
   TYPES
========================================================= */

type FooterLink = {
  id: string;
  label: string;
  href: string;
};

type FooterSection = {
  id: string;
  title: string;
  links?: FooterLink[];
  content?: React.ReactNode;
};

/* =========================================================
   DONNÉES STATIQUES
========================================================= */

const currentYear = new Date().getFullYear();

const sections: FooterSection[] = [
  {
    id: "societe",
    title: "Société",
    links: [
      { id: "about", label: "À propos", href: "/apropos" },
      { id: "realisations", label: "Réalisations", href: "/activites" },
      { id: "contact", label: "Contact", href: "/contact" },
      {
        id: "recrutement",
        label: "Rejoignez notre équipe",
        href: "/recrutement",
      },
    ],
  },
  {
    id: "legal",
    title: "Légal",
    links: [
      { id: "mentions", label: "Mentions légales", href: "/mentions-legales" },
      {
        id: "confidentialite",
        label: "Confidentialité",
        href: "/politique-confidentialite",
      },
    ],
  },
];

/* =========================================================
   COMPOSANT PRINCIPAL
========================================================= */

export function Footer() {
  return (
    <footer className="mt-12 border-t bg-[#314A89]" role="contentinfo">
      <div className="mx-auto max-w-6xl px-4 py-6 sm:py-8">
        {/* ========================
            GRID PRINCIPALE
        ======================== */}
        <div className="grid gap-6 sm:gap-8 md:grid-cols-4">
          {/* MARQUE / DESCRIPTION */}
          <div>
            <div className="font-bold text-white text-sm sm:text-base">
              SYBAT
            </div>

            <p className="mt-2 text-xs sm:text-sm text-white/90 leading-relaxed">
              Notre implantation géographique nous permet de répondre rapidement
              aux interventions urgentes. Bureaux ouverts du lundi au vendredi
              de 7h30 à 18h30.
            </p>
          </div>

          {/* SECTIONS DYNAMIQUES */}
          {sections.map((section) => (
            <FooterLinksSection key={section.id} section={section} />
          ))}

          {/* CONTACT FIXE */}
          <FooterContact />
        </div>

        {/* ========================
            COPYRIGHT
        ======================== */}
        <div className="mt-6 text-[11px] sm:text-xs text-white/70">
          © {currentYear} SYBAT. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}

/* =========================================================
   SOUS-COMPOSANTS
========================================================= */

/**
 * Affiche une section de liens générique.
 */
function FooterLinksSection({ section }: { section: FooterSection }) {
  if (!section?.id || !section?.title) return null;

  return (
    <div>
      <h4 className="font-semibold text-white text-sm">{section.title}</h4>

      <ul className="mt-2 space-y-1 text-xs sm:text-sm text-white/90">
        {Array.isArray(section.links) &&
          section.links.map((link) => {
            if (!link?.id || !link?.href) return null;

            return (
              <li key={link.id}>
                <Link
                  href={link.href}
                  className="hover:underline focus:outline-none focus:ring-2 focus:ring-white/50 rounded"
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

/**
 * Section contact isolée pour éviter mélange de responsabilités.
 */
function FooterContact() {
  return (
    <div>
      <h4 className="font-semibold text-white text-sm">Contact</h4>

      <ul className="mt-2 space-y-1 text-xs sm:text-sm text-white/90">
        <li>45 rue du Pont d'Argenteuil 92230 Gennevilliers</li>

        <li>
          Tél :{" "}
          <a href="tel:+330147397374" className="text-blue-300 hover:underline">
            01 47 39 73 74
          </a>
        </li>

        <li>
          Email :{" "}
          <a
            href="mailto:contact@sybat.fr"
            className="text-blue-300 hover:underline"
          >
            sybat@sybat.fr
          </a>
        </li>
      </ul>
    </div>
  );
}
