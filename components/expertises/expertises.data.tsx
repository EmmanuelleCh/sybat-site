import type { Expertise } from "./expertises.types";

export const expertises: Expertise[] = [
  {
    id: "accessibilite",
    title: "Accessibilité",
    description:
      "Permettre aux personnes handicapées de circuler avec autonomie et d’accéder aux locaux et équipements.",
    image: "/imgAccebilite.jpg",
    alt: "Accessibilité",
    href: "/activites#accessibilite",
    priority: true,
  },
  {
    id: "entretien",
    title: "Entretien et rénovation",
    description:
      "Travaux réguliers et améliorations pour garantir la sécurité et le confort des bâtiments.",
    image: "/imgAccessibilite2.jpg",
    alt: "Entretien et rénovation",
    href: "/activites#entretien",
  },
  {
    id: "vrd",
    title: "VRD : Voirie et réseaux divers",
    description:
      "Réseaux d’alimentation, électricité, télécoms et évacuation des eaux.",
    image: "/exterieur.jpg",
    alt: "Voirie et réseaux divers",
    href: "/activites#vrd",
  },
  {
    id: "tce",
    title: "TCE : Travaux Tous Corps d’État",
    description: "Gestion globale de chantier du gros œuvre aux finitions.",
    image: "/camion.jpg",
    alt: "Travaux tous corps d’État",
    href: "/activites",
  },
  {
    id: "pmr",
    title: "PMR : Personnes à Mobilité Réduite",
    description:
      "Aménagements spécifiques pour faciliter l’accessibilité des bâtiments.",
    image: "/imgAccessibilite1.jpg",
    alt: "Personnes à mobilité réduite",
    href: "/activites#pmr",
  },
  {
    id: "rel",
    title: "REL : Remise en l’État de logement",
    description: "Travaux rapides et soignés après départ de locataires.",
    image: "/couloir.jpg",
    alt: "Remise en état de logement",
    href: "/activites#rel",
  },
];
