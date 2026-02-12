/**
 * Représente un slide du carousel.
 */
export type Slide = {
  src: string;
  alt?: string;
};

export type CarouselProps = {
  slides: Slide[];
  className?: string;
  autoPlay?: boolean;
  interval?: number;
  showIndicators?: boolean;
  showArrows?: boolean;
  rounded?: boolean;
};
