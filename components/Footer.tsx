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
};

const currentYear = new Date().getFullYear();

const sections: FooterSection[] = [
  {
    id: "societe",
    title: "Société",
    links: [
      {
        id: "recrutement",
        label: "Rejoignez notre équipe",
        href: "/recrutement",
      },
    ],
  },
];

/* =========================================================
   FOOTER
========================================================= */

export function Footer() {
  return (
    <footer className="mt-16 bg-[#314A89] text-white" role="contentinfo">
      <div className="mx-auto max-w-6xl px-6 py-12">
        {/* GRID */}
        <div className="grid gap-10 md:grid-cols-3">
          {/* MARQUE */}
          <div className="space-y-4">
            <div className="text-lg font-semibold tracking-wide">SYBAT</div>

            <p className="text-sm text-white/80 leading-relaxed max-w-sm">
              Notre implantation géographique nous permet de répondre rapidement
              aux interventions urgentes. Bureaux ouverts du lundi au vendredi
              de 7h30 à 18h30.
            </p>
          </div>

          {/* SECTIONS */}
          {sections.map((section) => (
            <FooterLinksSection key={section.id} section={section} />
          ))}

          {/* CONTACT */}
          <FooterContact />
        </div>

        {/* LIGNE SÉPARATION */}
        <div className="mt-10 border-t border-white/20 pt-6 text-xs text-white/60">
          © {currentYear} SYBAT. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}

/* =========================================================
   SECTIONS
========================================================= */

function FooterLinksSection({ section }: { section: FooterSection }) {
  if (!section?.title) return null;

  return (
    <div className="space-y-4">
      <h4 className="text-sm font-semibold uppercase tracking-wider text-white/90">
        {section.title}
      </h4>

      <ul className="space-y-2 text-sm text-white/80">
        {section.links?.map((link) => (
          <li key={link.id}>
            <Link
              href={link.href}
              className="transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function FooterContact() {
  return (
    <div className="space-y-4">
      <h4 className="text-sm font-semibold uppercase tracking-wider text-white/90">
        Contact
      </h4>

      <ul className="space-y-2 text-sm text-white/80">
        <li>{"45 rue du Pont d'Argenteuil"}</li>
        <li>92230 Gennevilliers</li>

        <li>
          <a
            href="tel:+330147397374"
            className="transition-colors hover:text-white"
          >
            01 47 39 73 74
          </a>
        </li>

        <li>
          <a
            href="mailto:sybat@sybat.fr"
            className="transition-colors hover:text-white"
          >
            sybat@sybat.fr
          </a>
        </li>
      </ul>
    </div>
  );
}
