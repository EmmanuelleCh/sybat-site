import Image from "next/image";

/* =========================================================
   TYPES
========================================================= */

/**
 * Représente un bloc de contenu affiché dans la section.
 */
export type Block = {
  id: string; // clé stable obligatoire
  title: string;
  text: string;
  image: string; // chemin depuis /public
  reverseOnDesktop?: boolean;
};

type BlocksProps = {
  blocks: Block[];
  aspectClass?: string;
};

/* =========================================================
   COMPOSANT PRINCIPAL
========================================================= */

export default function Blocks({
  blocks,
  aspectClass = "aspect-[4/3]",
}: BlocksProps) {
  // Sécurité minimale : vérifie que blocks est valide
  if (!Array.isArray(blocks) || blocks.length === 0) {
    return null;
  }

  return (
    <div className="space-y-20">
      {blocks.map((block, index) => {
        // Protection contre données incomplètes
        if (!block?.id || !block?.title || !block?.text || !block?.image) {
          return null;
        }

        return (
          <BlockItem
            key={block.id}
            block={block}
            index={index}
            aspectClass={aspectClass}
          />
        );
      })}
    </div>
  );
}

/* =========================================================
   SOUS-COMPOSANT INTERNE (RESPONSABILITÉ UNIQUE)
========================================================= */

function BlockItem({
  block,
  index,
  aspectClass,
}: {
  block: Block;
  index: number;
  aspectClass: string;
}) {
  // Détermine si l’image doit être inversée
  const reverse =
    typeof block.reverseOnDesktop === "boolean"
      ? block.reverseOnDesktop
      : index % 2 === 1;

  return (
    <section
      className="grid items-center gap-10 md:grid-cols-2"
      aria-labelledby={`block-title-${block.id}`}
    >
      {/* IMAGE */}
      <div
        className={[
          "relative w-full rounded-2xl overflow-hidden shadow-sm",
          aspectClass,
          reverse ? "md:order-last" : "",
        ].join(" ")}
      >
        <Image
          src={block.image}
          alt={block.title}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 600px, (min-width: 640px) 50vw, 100vw"
          priority={index === 0} // optimisation LCP
        />
      </div>

      {/* TEXTE */}
      <div className="max-w-2xl">
        <h2
          id={`block-title-${block.id}`}
          className="text-2xl sm:text-3xl font-semibold tracking-tight"
        >
          {block.title}
        </h2>

        <p className="mt-4 text-gray-700 leading-relaxed">{block.text}</p>
      </div>
    </section>
  );
}
