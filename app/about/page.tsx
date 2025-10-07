import Image from "next/image";

export default function About() {
  return (
    <main>
      <section className="relative h-64 w-full">
        <Image
          src="/Devant-Sybat.jpg"
          alt="Flotte et chantier SYBAT"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          priority
        />
      </section>

      <section>
        <div>
          <h1 className="text-3xl font-bold mb-6 mt-6 text-center text-sybat">
            À propos de Sybat
          </h1>
        </div>
        <div className="">
          <p className="m-10 opacity-85">
            A sa création en 1994, SYBAT ARTISAN a évolué au fil du temps pour
            devenir EURL SYBAT en 1999 et avait pour objet l’exécution de gros
            œuvres de maçonnerie. Elle a progressée pour se doter d’une
            structure très polyvalente, lui permettant d’assurer les exécutions
            de second œuvre et de finition.{" "}
          </p>

          <p className="m-10 opacity-85">
            ar ailleurs, le 1er Octobre 2012 l’entreprise SYBAT a procéder à
            l’absorbation de la SARL DPEC (Entreprise de plomberie, chauffage et
            couverture) Cette fusion nous permet d’assurer la réalisation de
            travaux diversifiés, ce qui évite le recours à d’autres prestataires
            dans le cas d’une prise en compte global d’un chantier.{" "}
          </p>

          <p className="m-10 opacity-85">
            En Novembre 2013 notre société change de forme juridique pour
            devenir une Société à Action Simplifiée SAS.{" "}
          </p>

          <p className="m-10 opacity-85">
            Ses bureaux : situés au 45 rue du Pont d’Argenteuil 92 230
            GENNEVILLIERS, en constitue le Siège Social. C’est à cet endroit que
            sont traités toutes les opérations et procédures administratives
            engagées par l’Entreprise et ses tiers avec la présence permanent
            d’un collaborateur.{" "}
          </p>

          <p className="m-10 opacity-85">
            A la même adresse se trouve également notre dépôt, ateliers et
            bureaux techniques, d’une superficie de 1561 m², abritant quand à
            lui l’intégralité du matériel et des véhicules. Il sert également au
            stockage des matériaux. C’est également ici que se trouve l’atelier
            de l’Entreprise.
          </p>

          <p className="m-10 opacity-85">
            Notre implantation géographique nous permet de répondre aux
            interventions les plus urgentes dans les plus brefs délais.
          </p>
        </div>
      </section>
    </main>
  );
}
