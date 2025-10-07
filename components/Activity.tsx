import Image from "next/image";

export type Block = {
  title: string;
  text: string;
  image: string; // chemin depuis /public (ex: "/blocs/1.jpg")
  reverseOnDesktop?: boolean; // force l’image à droite si true
};

export default function Blocks({
  blocks,
  aspectClass = "aspect-[4/3]", // change en "aspect-video" si tu préfères 16/9
}: {
  blocks: Block[];
  aspectClass?: string;
}) {
  return (
    <div className="space-y-16">
      {blocks.map((b, i) => {
        const reverse = b.reverseOnDesktop ?? i % 2 === 1;
        return (
          <section
            key={`${b.title}-${i}`}
            className="grid items-center gap-8 md:grid-cols-2"
          >
            {/* Image (alterne l’ordre en desktop) */}
            <div
              className={[
                "relative w-full rounded-2xl overflow-hidden card",
                aspectClass,
                reverse ? "md:order-last" : "",
              ].join(" ")}
            >
              <Image
                src={b.image}
                alt={b.title}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 600px, (min-width: 640px) 50vw, 100vw"
                priority={i === 0}
              />
            </div>

            {/* Texte */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
                {b.title}
              </h2>
              <p className="mt-3 opacity-85 text-pretty">{b.text}</p>
            </div>
          </section>
        );
      })}
    </div>
  );
}
