import Expertises from "@/components/expertises/Expertises";
import Image from "next/image";
import Carousel from "@/components/carousel/Carousel";
import type { Slide } from "@/components/carousel/carousel.types";

type Feature = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

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

const features: Feature[] = [
  {
    id: "qualite",
    title: "Qualité d’exécution",
    description: "Contrôles de fin de chantier et responsables dédiés.",
    icon: "/image_6.png",
  },
  {
    id: "delais",
    title: "Respect des délais",
    description: "Planning clair et interventions rapides.",
    icon: "/image_6.png",
  },
  {
    id: "securite",
    title: "Sécurité & garanties",
    description: "Assurance décennale et habilitations conformes.",
    icon: "/image_6.png",
  },
  {
    id: "eco",
    title: "Engagement responsable",
    description: "Tri des déchets et matériaux certifiés.",
    icon: "/image_6.png",
  },
];

export default function Home() {
  const safeSlides = Array.isArray(slides) ? slides : [];
  const safeFeatures = Array.isArray(features) ? features : [];

  return (
    <main className="bg-white">
      {/* =====================================================
          HERO BTP
      ===================================================== */}
      <section className="relative bg-slate-900 text-white">
        <div className="absolute inset-0">
          <Image
            src="/photo3.jpg"
            alt="Chantier SYBAT"
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Entreprise générale de bâtiment
            </h1>

            <p className="mt-6 text-xl font-semibold text-slate-200">
              Rénovation · Maintenance · Tous Corps d’État
            </p>

            <p className="mt-6 text-slate-300 leading-relaxed">
              Depuis plus de 20 ans, SYBAT accompagne collectivités, bailleurs
              et particuliers avec rigueur, maîtrise technique et respect des
              délais.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/contact"
                className="bg-sybat px-6 py-3 font-semibold rounded-lg hover:opacity-90 transition"
              >
                Demander un devis
              </a>

              <a
                href="tel:+33147397374"
                className="border border-white/40 px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
              >
                01 47 39 73 74
              </a>
            </div>

            <div className="mt-12 flex gap-12 text-sm text-slate-300">
              <Stat value="20+" label="Ans d’expérience" />
              <Stat value="1 200+" label="Chantiers réalisés" />
              <Stat value="10" label="Équipes terrain" />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          EXPERTISES
      ===================================================== */}
      <section className="py-24 border-b border-slate-200">
        <Expertises />
      </section>

      {/* =====================================================
          POURQUOI NOUS CHOISIR
      ===================================================== */}
      <section className="py-24 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-sybatDark">
            Nos engagements
          </h2>

          <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {safeFeatures.map((feature) => (
              <div
                key={feature.id}
                className="bg-white p-8 rounded-lg shadow-sm border border-slate-200"
              >
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={60}
                  height={60}
                />

                <h3 className="mt-6 text-lg font-semibold text-sybatDark">
                  {feature.title}
                </h3>

                <p className="mt-3 text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          RÉFÉRENCES
      ===================================================== */}
      {safeSlides.length > 0 && (
        <section className="py-24 border-t border-slate-200">
          <div className="mx-auto max-w-6xl px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-sybatDark">
              Ils nous font confiance
            </h2>

            <div className="mt-12 mx-auto max-w-lg">
              <div className="rounded-lg shadow-md bg-white p-6">
                <Carousel slides={safeSlides} autoPlay interval={3500} />
              </div>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}

/* =========================================================
   STAT
========================================================= */

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <strong className="block text-2xl text-white">{value}</strong>
      <span className="text-slate-400">{label}</span>
    </div>
  );
}
