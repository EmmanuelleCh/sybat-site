// app/contact/page.tsx
import Image from "next/image";
import Contact from "@/components/Contact/Contact";

export default function ContactPage() {
  return (
    <main className="bg-white text-slate-800">
      {/* =====================================================
          HERO BTP
      ===================================================== */}
      <section className="relative bg-slate-900 text-white">
        <div className="absolute inset-0">
          <Image
            src="/photo2.jpg"
            alt="Chantier SYBAT"
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Contact
            </h1>

            <p className="mt-6 text-xl text-slate-200">
              Une question ? Un devis ? Nos équipes vous répondent rapidement.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          INFORMATIONS + FORMULAIRE
      ===================================================== */}
      <section className="py-24 border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-4 grid gap-16 md:grid-cols-2">
          {/* Bloc Informations */}
          <div>
            <h2 className="text-2xl font-bold text-sybatDark mb-8">
              Nos coordonnées
            </h2>

            <div className="space-y-4 text-lg">
              <div>
                <strong className="block text-slate-600 text-sm uppercase tracking-wide">
                  Adresse
                </strong>
                <p>45, rue du Pont d’Argenteuil</p>
                <p>92230 Gennevilliers</p>
              </div>

              <div>
                <strong className="block text-slate-600 text-sm uppercase tracking-wide">
                  Email
                </strong>
                <p>sybat@sybat.fr</p>
              </div>

              <div>
                <strong className="block text-slate-600 text-sm uppercase tracking-wide">
                  Téléphone
                </strong>
                <p>01 47 39 73 74</p>
              </div>

              <div>
                <strong className="block text-slate-600 text-sm uppercase tracking-wide">
                  Fax
                </strong>
                <p>01 47 39 63 95</p>
              </div>
            </div>
          </div>

          {/* Formulaire */}
          <div>
            <h2 className="text-2xl font-bold text-sybatDark mb-8">
              Formulaire de contact
            </h2>

            <Contact />
          </div>
        </div>
      </section>
    </main>
  );
}
