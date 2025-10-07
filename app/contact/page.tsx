// app/contact/page.tsx
import Contact from "@/components/Contact";

export default function ContactPage() {
  return (
    <main className="min-h-screen container mx-auto px-4 py-16 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6 text-center text-sybat">
        Contact
      </h1>

      {/* Bloc d'infos contact centré */}
      <div className="mb-8 opacity-80 flex flex-col items-center space-y-2 text-center">
        <p>45, rue du Pont d’Argenteuil</p>
        <p>92230 Gennevilliers</p>
        <p>sybat@sybat.fr</p>
        <p>Tel : 01 47 39 73 74</p>
        <p>Fax : 01 47 39 63 95</p>
      </div>

      <Contact />
    </main>
  );
}
