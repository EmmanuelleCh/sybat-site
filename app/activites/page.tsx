import Image from "next/image";

export default function BlocsPage() {
  return (
    <main className="bg-gradient-to-b from-white via-slate-50 to-white text-gray-800">
      {/* =========================================================
         HERO
      ========================================================= */}
      <section className="relative h-[420px] w-full overflow-hidden">
        <Image
          src="/image1.jpg"
          alt="Chantier SYBAT"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/30" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">
            Nos domaines d’expertise
          </h1>
          <p className="mt-4 text-white/90 text-lg max-w-2xl">
            Une approche concrète, humaine et orientée résultat.
          </p>
        </div>
      </section>

      {/* =========================================================
         SECTION TEMPLATE
      ========================================================= */}
      <div className="container-balanced px-4 sm:px-6 lg:px-8 py-24 space-y-28">
        {/* ACCESSIBILITÉ */}
        <SectionBlock
          image="/imgAccebilite.jpg"
          title="Accessibilité"
          content={
            <>
              <p>
                L’architecture peut créer ou supprimer le handicap. SYBAT adapte
                ERP et habitats afin de garantir une accessibilité totale, en
                site occupé.
              </p>
              <p className="mt-4">
                Circulation facilitée, signalétique adaptée, éclairage optimisé
                et solutions personnalisées : chaque projet vise l’autonomie et
                la sécurité.
              </p>
            </>
          }
        />

        {/* ENTRETIEN */}
        <SectionBlock
          image="/sol.jpg"
          title="Entretien & Rénovation"
          reverse
          content={
            <>
              <p>
                Depuis plus de 20 ans, nous assurons l’entretien courant en site
                occupé afin de garantir la pérennité du patrimoine et le confort
                des occupants.
              </p>
              <ul className="mt-6 space-y-2">
                <li>• Maçonnerie</li>
                <li>• Plomberie – Chauffage</li>
                <li>• Carrelage – Faïence</li>
                <li>• Ravalement & isolation</li>
                <li>• Électricité – Menuiserie – Peinture</li>
              </ul>
            </>
          }
        />

        {/* VRD */}
        <SectionBlock
          image="/exterieur.jpg"
          title="Voirie & Réseaux Divers"
          content={
            <>
              <p>
                Nous réalisons l’ensemble des ouvrages nécessaires aux travaux
                de VRD avec maîtrise complète des réseaux et aménagements
                extérieurs.
              </p>
              <ul className="mt-6 space-y-2">
                <li>• Terrassements généraux</li>
                <li>• Réseaux EU / EV / EP</li>
                <li>• Bordures béton</li>
                <li>• Revêtements de chaussée</li>
                <li>• Signalisation complète</li>
              </ul>
            </>
          }
        />

        {/* PMR */}
        <SectionBlock
          image="/imgAccessibilite1.jpg"
          title="PMR – Adaptation Personnes à Mobilité Réduite"
          reverse
          content={
            <>
              <p>
                Titulaire du label HANDIBAT, SYBAT accompagne depuis plus de 15
                ans l’adaptation de logements pour favoriser autonomie et
                sécurité.
              </p>

              <ul className="mt-6 space-y-2">
                <li>• Douche à l’italienne</li>
                <li>• Rampe d’accès</li>
                <li>• Élargissement de portes</li>
                <li>• Monte-escalier</li>
                <li>• Automatisation des ouvertures</li>
              </ul>

              <p className="mt-6">
                Chaque projet respecte les normes issues de la loi du 11 février
                2005 sur l’accessibilité.
              </p>
            </>
          }
        />

        {/* REL */}
        <SectionBlock
          image="/couloir.jpg"
          title="REL – Remise en l’état"
          content={
            <>
              <p>
                Entre deux locataires ou après sinistre, nous assurons la remise
                en état complète des logements afin de garantir sécurité,
                conformité et valorisation.
              </p>

              <ul className="mt-6 space-y-2">
                <li>• Sécurité électrique et gaz</li>
                <li>• Traitement des infiltrations</li>
                <li>• Conformité amiante & plomb</li>
                <li>• Embellissement et valorisation</li>
              </ul>

              <p className="mt-6 font-medium text-sybat">
                Un interlocuteur unique, un suivi clair, une maîtrise complète
                des corps d’état.
              </p>
            </>
          }
        />
      </div>
    </main>
  );
}

/* =========================================================
   COMPOSANT SECTION REUTILISABLE
========================================================= */

function SectionBlock({
  image,
  title,
  content,
  reverse = false,
}: {
  image: string;
  title: string;
  content: React.ReactNode;
  reverse?: boolean;
}) {
  return (
    <section className="grid items-center gap-16 md:grid-cols-2">
      <div
        className={`relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-xl transition duration-500 hover:shadow-2xl ${
          reverse ? "md:order-last" : ""
        }`}
      >
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover hover:scale-105 transition duration-700"
        />
      </div>

      <div className="max-w-3xl space-y-6 text-lg leading-relaxed">
        <h2 className="text-3xl font-bold text-sybatDark">{title}</h2>

        <div className="text-gray-700">{content}</div>
      </div>
    </section>
  );
}
