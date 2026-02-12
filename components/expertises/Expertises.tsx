import ExpertiseCard from "./ExpertiseCard";
import ExpertisesHeader from "./ExpertiseHeader";
import { expertises } from "./expertises.data";

/**
 * Section complète des expertises.
 *
 * Responsabilité :
 * - Structurer la section
 * - Injecter les données
 * - Orchestrer les sous-composants
 */
function Expertises() {
  // Sécurité minimale : si data vide
  if (!Array.isArray(expertises) || expertises.length === 0) {
    return null;
  }

  return (
    <section
      className="mx-auto max-w-6xl px-4 py-16"
      aria-labelledby="expertises-heading"
    >
      <ExpertisesHeader />

      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {expertises.map((expertise) => {
          // Sécurité : protection contre données mal formées
          if (!expertise?.id || !expertise?.title) return null;

          return <ExpertiseCard key={expertise.id} expertise={expertise} />;
        })}
      </div>
    </section>
  );
}

export default Expertises;
