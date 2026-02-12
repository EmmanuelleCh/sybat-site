/**
 * Type représentant un domaine d'expertise.
 */
export type Expertise = {
  id: string; // utilisé comme clé stable
  title: string;
  description: string;
  image: string; // chemin depuis /public
  alt: string;
  href: string;
  priority?: boolean;
};
