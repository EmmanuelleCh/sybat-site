"use client";

import React from "react";
import clsx from "clsx";

// Types
export type Slide = {
  src: string; // ex: "/images/slide-1.jpg" (dans /public)
  alt?: string;
};

type Props = {
  slides: Slide[];
  className?: string;
  autoPlay?: boolean;
  interval?: number; // ms
  showIndicators?: boolean;
  showArrows?: boolean;
  rounded?: boolean; // coins arrondis
};

export default function Carousel({
  slides,
  className,
  autoPlay = false,
  interval = 4000,
  showIndicators = true,
  showArrows = true,
  rounded = true,
}: Props) {
  const [index, setIndex] = React.useState(0);
  const count = slides.length;

  // Auto-play
  React.useEffect(() => {
    if (!autoPlay || count <= 1) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % count);
    }, interval);
    return () => clearInterval(id);
  }, [autoPlay, interval, count]);

  // Keyboard navigation (focusable container)
  const containerRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    el.addEventListener("keydown", onKey);
    return () => el.removeEventListener("keydown", onKey);
  }, []);

  // Touch / swipe
  const startX = React.useRef<number | null>(null);
  const deltaX = React.useRef(0);

  const onTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
    deltaX.current = 0;
  };
  const onTouchMove = (e: React.TouchEvent) => {
    if (startX.current == null) return;
    deltaX.current = e.touches[0].clientX - startX.current;
  };
  const onTouchEnd = () => {
    const threshold = 50; // px
    if (deltaX.current > threshold) prev();
    else if (deltaX.current < -threshold) next();
    startX.current = null;
    deltaX.current = 0;
  };

  // Helpers
  const goTo = (i: number) => setIndex(((i % count) + count) % count);
  const next = () => goTo(index + 1);
  const prev = () => goTo(index - 1);

  if (count === 0) return null;

  return (
    <div
      ref={containerRef}
      tabIndex={0}
      aria-roledescription="carousel"
      aria-label="Carrousel d'images"
      className={clsx("relative select-none outline-none", className)}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Viewport */}
      <div
        className={clsx(
          "overflow-hidden w-50",
          rounded && "rounded-2xl shadow"
        )}
      >
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slides.map((s, i) => (
            <div key={i} className="relative w-full shrink-0">
              {/*
                Par défaut on utilise <img> pour éviter les soucis de config Next/Image.
                Tu peux remplacer par <Image fill /> si tu préfères et que ton next.config est prêt.
              */}
              <img
                src={s.src}
                alt={s.alt ?? `Slide ${i + 1}`}
                className="mx-auto max-h-32 w-auto object-contain"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Arrows */}
      {showArrows && count > 1 && (
        <>
          <button
            aria-label="Slide précédente"
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white backdrop-blur px-3 py-2 rounded-full shadow text-sm"
          >
            ←
          </button>
          <button
            aria-label="Slide suivante"
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white backdrop-blur px-3 py-2 rounded-full shadow text-sm"
          >
            →
          </button>
        </>
      )}

      {/* Indicators */}
      {showIndicators && count > 1 && (
        <div className="absolute inset-x-0 bottom-3 flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              aria-label={`Aller au slide ${i + 1}`}
              onClick={() => goTo(i)}
              className={clsx(
                "h-2 w-2 rounded-full transition-all",
                i === index
                  ? "w-5 bg-white shadow"
                  : "bg-white/60 hover:bg-white"
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
}
