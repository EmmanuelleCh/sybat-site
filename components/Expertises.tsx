import Image from "next/image";

export function Expertises() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-3xl font-extrabold text-sybat text-center">
        Nos domaines d’expertise
      </h2>
      <p className="mt-3 text-slate-600 text-center max-w-2xl mx-auto">
        Une expertise complète pour répondre aux besoins des collectivités, des
        entreprises et des particuliers.
      </p>

      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/* Accessibilité */}
        <div className="overflow-hidden rounded-xl border border-slate-200 shadow-sm flex flex-col">
          <div className="relative h-48 w-full">
            <Image
              src="/imgAccebilite.jpg"
              alt="Accessibilité"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              priority
            />
          </div>
          <div className="flex flex-col flex-1 p-6">
            <h3 className="text-lg font-semibold text-sybat">Accessibilité</h3>
            <p className="mt-2 text-sm text-slate-600 flex-1">
              Permettre aux personnes handicapées de circuler avec autonomie,
              d’accéder aux locaux et équipements, et de communiquer.
            </p>
            <a
              href="/activites#accessibilite"
              className="mt-4 inline-block rounded-md bg-sybat px-4 py-2 text-sm font-semibold text-white hover:bg-bleusybat"
            >
              Voir plus
            </a>
          </div>
        </div>

        {/* Entretien et rénovation */}
        <div className="overflow-hidden rounded-xl border border-slate-200 shadow-sm flex flex-col">
          <div className="relative h-48 w-full">
            <Image
              src="/imgAccessibilite2.jpg"
              alt="Entretien et rénovation"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
          <div className="flex flex-col flex-1 p-6">
            <h3 className="text-lg font-semibold text-sybat">
              Entretien et rénovation
            </h3>
            <p className="mt-2 text-sm text-slate-600 flex-1">
              Travaux réguliers et améliorations pour garantir la sécurité et le
              confort des bâtiments.
            </p>
            <a
              href="/activites#entretien"
              className="mt-4 inline-block rounded-md bg-sybat px-4 py-2 text-sm font-semibold text-white hover:bg-[#3E6AE1]"
            >
              Voir plus
            </a>
          </div>
        </div>

        {/* VRD */}
        <div className="overflow-hidden rounded-xl border border-slate-200 shadow-sm flex flex-col">
          <div className="relative h-48 w-full">
            <Image
              src="/exterieur.jpg"
              alt="Voirie et réseaux divers"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
          <div className="flex flex-col flex-1 p-6">
            <h3 className="text-lg font-semibold text-sybat">
              VRD : Voirie et réseaux divers
            </h3>
            <p className="mt-2 text-sm text-slate-600 flex-1">
              Réseaux d’alimentation, électricité, télécoms et évacuation des
              eaux : conception et entretien.
            </p>
            <a
              href="activites"
              className="mt-4 inline-block rounded-md bg-sybat px-4 py-2 text-sm font-semibold text-white hover:bg-[#3E6AE1]"
            >
              Voir plus
            </a>
          </div>
        </div>

        {/* TCE */}
        <div className="overflow-hidden rounded-xl border border-slate-200 shadow-sm flex flex-col">
          <div className="relative h-48 w-full">
            <Image
              src="/camion.jpg"
              alt="Travaux tous corps d’État"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
          <div className="flex flex-col flex-1 p-6">
            <h3 className="text-lg font-semibold text-sybat">
              TCE : Travaux Tous Corps d’État
            </h3>
            <p className="mt-2 text-sm text-slate-600 flex-1">
              Une gestion globale de chantier, du gros œuvre aux finitions, avec
              un interlocuteur unique.
            </p>
            <a
              href="/activites"
              className="mt-4 inline-block rounded-md bg-sybat px-4 py-2 text-sm font-semibold text-white hover:bg-[#3E6AE1]"
            >
              Voir plus
            </a>
          </div>
        </div>

        {/* PMR */}
        <div className="overflow-hidden rounded-xl border border-slate-200 shadow-sm flex flex-col">
          <div className="relative h-48 w-full">
            <Image
              src="/imgAccessibilite1.jpg"
              alt="Personnes à mobilité réduite"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
          <div className="flex flex-col flex-1 p-6">
            <h3 className="text-lg font-semibold text-sybat">
              PMR : Personnes à Mobilité Réduite
            </h3>
            <p className="mt-2 text-sm text-slate-600 flex-1">
              Aménagements spécifiques pour faciliter l’accessibilité des
              bâtiments et logements aux PMR.
            </p>
            <a
              href="#"
              className="mt-4 inline-block rounded-md bg-sybat px-4 py-2 text-sm font-semibold text-white hover:bg-[#3E6AE1]"
            >
              Voir plus
            </a>
          </div>
        </div>

        {/* REL */}
        <div className="overflow-hidden rounded-xl border border-slate-200 shadow-sm flex flex-col">
          <div className="relative h-48 w-full">
            <Image
              src="/couloir.jpg"
              alt="Remise en l’État de logement"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
          <div className="flex flex-col flex-1 p-6">
            <h3 className="text-lg font-semibold text-sybat">
              REL : Remise en l’État de logement
            </h3>
            <p className="mt-2 text-sm text-slate-600 flex-1">
              Travaux de remise en état rapide et soignée, notamment après
              départ de locataires.
            </p>
            <a
              href="activites"
              className="mt-4 inline-block rounded-md bg-sybat px-4 py-2 text-sm font-semibold text-white hover:bg-[#3E6AE1]"
            >
              Voir plus
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
