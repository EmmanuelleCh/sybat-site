import { Expertises } from "@/components/Expertises";
import Image from "next/image";
import Carousel, { type Slide } from "@/components/Carousel";

const slides: Slide[] = [
  { src: "/citallios.png", alt: "Chantier gros œuvre" },
  { src: "/clichy.png", alt: "Rénovation intérieure" },
  { src: "/engie.png", alt: "Intervention dépannage" },
  { src: "/foncia.png", alt: "Chantier gros œuvre" },
  { src: "/habitatHautDeSeine.png", alt: "Rénovation intérieure" },
  { src: "/icade.png", alt: "Intervention dépannage" },
  { src: "/immodeFrance.png", alt: "Chantier gros œuvre" },
  { src: "/logementFrancilien.png", alt: "Rénovation intérieure" },
  { src: "/mairiedeSaintOuen.png", alt: "Intervention dépannage" },
  { src: "/ophBonneuil.png", alt: "Chantier gros œuvre" },
  { src: "/ophGennevilliers.png", alt: "Rénovation intérieure" },
  { src: "/saintOuenHabitatPublic.png", alt: "Intervention dépannage" },
  { src: "/soliha.png", alt: "Chantier gros œuvre" },
  { src: "/valDoise.png", alt: "Rénovation intérieure" },
  { src: "/villeDeGennevilliers.png", alt: "Intervention dépannage" },
  { src: "/viroflay.png", alt: "Intervention dépannage" },
];

export default function Home() {
  return (
    <main>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10" />
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
          {/* Texte */}
          <div>
            <span className="inline-block rounded-full bg-blue-50 px-3 py-1 text-sm text-blue-700">
              20+ ans d’expérience
            </span>
            <h1 className="mt-4 text-4xl font-extrabold text-sybatDark md:text-5xl">
              Travaux <span className="text-bleusybat">fiables</span>, délais
              tenus, chantiers propres.
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              SYBAT accompagne pros & particuliers sur vos projets de
              rénovation, maintenance et dépannage.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="/contact"
                className="rounded-md bg-sybat px-5 py-3 font-semibold text-white hover:opacity-90"
              >
                Demander un devis
              </a>
              <a
                href="tel:+33147397374"
                className="rounded-md border border-slate-300 px-5 py-3 font-semibold text-sybatDark hover:bg-slate-50"
              >
                Nous appeler
              </a>
            </div>
            <div className="mt-6 flex gap-8 text-sm text-slate-500">
              <div>
                <strong className="block text-2xl text-sybatDark">4.7/5</strong>
                Avis Google
              </div>
              <div>
                <strong className="block text-2xl text-sybatDark">
                  1 200+
                </strong>
                Chantiers livrés
              </div>
              <div>
                <strong className="block text-2xl text-sybatDark">10</strong>
                Équipes terrain
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-soft">
            <Image
              src="/photo3.jpg"
              alt="Flotte et chantier SYBAT"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
              priority
            />
          </div>
        </div>
      </section>

      {/* EXPERTISES */}
      <Expertises />

      {/* POURQUOI NOUS CHOISIR */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-center text-3xl font-extrabold text-sybatDark">
            Pourquoi nous choisir ?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-slate-600">
            Des engagements concrets, mesurables, et tenus.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-slate-200 p-6 shadow-sm">
              <Image src="/image_6.png" alt="Qualité" width={60} height={60} />
              <h3 className="text-lg font-semibold text-sybatDark">
                Qualité de travail
              </h3>
              <p className="mt-2 text-slate-600">
                Contrôles fin de chantier, photos avant/après, responsables
                dédiés.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 p-6 shadow-sm">
              <Image src="/image_6.png" alt="Qualité" width={60} height={60} />
              <h3 className="text-lg font-semibold text-sybatDark">
                Délais tenus
              </h3>
              <p className="mt-2 text-slate-600">
                Planning partagé, interventions urgentes {"<"}24h si contrat.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 p-6 shadow-sm">
              <Image src="/image_6.png" alt="Qualité" width={60} height={60} />
              <h3 className="text-lg font-semibold text-sybatDark">
                Sécurité & garanties
              </h3>
              <p className="mt-2 text-slate-600">
                Assurance décennale, habilitations, EPI systématiques.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 p-6 shadow-sm">
              <Image src="/image_6.png" alt="Qualité" width={60} height={60} />
              <h3 className="text-lg font-semibold text-sybatDark">
                Éco-responsable
              </h3>
              <p className="mt-2 text-slate-600">
                Tri des déchets, matériaux certifiés, flotte optimisée.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* IL NOUS FONT CONFIANCE */}
      <section>
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-center text-3xl font-extrabold text-sybatDark">
            Il nous font confiance
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-sybatDark">
            Des engagements concrets, mesurables, et tenus.
          </p>
          <div className="mt-10 mx-auto max-w-lg">
            <div className="relative overflow-hidden rounded-xl shadow-soft ">
              <Carousel
                slides={slides}
                className="w-full h-full"
                autoPlay
                interval={3500}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
