import Image from "next/image";
import Link from "next/link";
import type { Expertise } from "./expertises.types";

/**
 * Carte représentant un domaine d'expertise.
 */
export default function ExpertiseCard({ expertise }: { expertise: Expertise }) {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 shadow-sm flex flex-col">
      {/* Image */}
      <div className="relative h-48 w-full">
        <Image
          src={expertise.image}
          alt={expertise.alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          priority={expertise.priority}
        />
      </div>

      {/* Contenu */}
      <div className="flex flex-col flex-1 p-6">
        <h3 className="text-lg font-semibold text-sybat">{expertise.title}</h3>

        <p className="mt-2 text-sm text-slate-600 flex-1">
          {expertise.description}
        </p>

        <Link
          href={expertise.href}
          className="mt-4 inline-block rounded-md bg-sybat px-4 py-2 text-sm font-semibold text-white hover:bg-[#3E6AE1]"
        >
          Voir plus
        </Link>
      </div>
    </div>
  );
}
