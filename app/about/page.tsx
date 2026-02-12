import Image from "next/image";

export default function About() {
  return (
    <main className="bg-white text-slate-800">
      {/* =====================================================
          HERO BTP
      ===================================================== */}
      <section className="relative bg-slate-900 text-white">
        <div className="absolute inset-0">
          <Image
            src="/Devant-Sybat.jpg"
            alt="Flotte et chantier SYBAT"
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              À propos de SYBAT
            </h1>

            <p className="mt-6 text-xl text-slate-200">
              Une entreprise générale de bâtiment implantée à Gennevilliers
              depuis plus de 20 ans.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          HISTOIRE
      ===================================================== */}
      <section className="py-24 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold text-sybatDark mb-10">
            Notre histoire
          </h2>

          <div className="space-y-8 leading-relaxed text-lg">
            <p>
              Créée en 1994 sous le nom de SYBAT ARTISAN, l’entreprise devient
              EURL SYBAT en 1999. D’abord spécialisée en gros œuvre, elle
              développe progressivement une organisation lui permettant de
              maîtriser l’ensemble des travaux de second œuvre et de finition.
            </p>

            <p>
              Le 1er octobre 2012, SYBAT absorbe la SARL DPEC (plomberie,
              chauffage et couverture), renforçant ainsi sa capacité à proposer
              une gestion complète des chantiers sans recours systématique à des
              prestataires externes.
            </p>

            <p>
              En novembre 2013, la société adopte la forme juridique de SAS,
              consolidant sa structure et son organisation interne.
            </p>

            <p>
              Le siège social est situé au 45 rue du Pont d’Argenteuil, 92230
              Gennevilliers. Bureaux administratifs, dépôt, ateliers et bureaux
              techniques (1 561 m²) regroupent l’ensemble du matériel, des
              véhicules et des équipes.
            </p>

            <p className="font-semibold text-sybatDark">
              Cette implantation stratégique permet d’intervenir rapidement et
              efficacement sur les chantiers les plus urgents.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          QUALIFICATIONS
      ===================================================== */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-sybatDark">
              Nos qualifications
            </h2>

            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
              Des habilitations et certifications garantissant sécurité,
              conformité réglementaire et qualité d’exécution.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              "QUALIGAZ – Habilitation de conformité gaz",
              "HANDIBAT – Accessibilité et aménagement PMR",
              "QUALIBAT – Références 2141 – 5111 – 6311",
              "AFPA – Formation professionnelle continue",
              "FCIO – Formation amiante",
              "AFT-IFTIM – Sécurité incendie, habilitations électriques, CACES, SST",
            ].map((item, index) => (
              <div key={index} className="bg-white border border-slate-200 p-8">
                <div className="w-12 h-1 bg-sybat mb-6" />
                <p className="font-medium text-slate-800">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
