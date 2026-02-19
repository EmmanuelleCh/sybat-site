"use client";

import React from "react";
import clsx from "clsx";
import type { CarouselProps } from "./carousel.types";

export default function Carousel({
  slides,
  className,
  autoPlay = false,
  interval = 4000,
  showIndicators = true,
  showArrows = true,
  rounded = true,
}: CarouselProps) {
  const count = Array.isArray(slides) ? slides.length : 0;
  const safeInterval = Math.max(interval, 1000);

  const [index, setIndex] = React.useState(0);
  const containerRef = React.useRef<HTMLDivElement>(null);

  const goTo = React.useCallback(
    (i: number) => {
      if (count === 0) return;
      setIndex(((i % count) + count) % count);
    },
    [count]
  );

  const next = React.useCallback(() => {
    if (count === 0) return;
    goTo(index + 1);
  }, [goTo, index, count]);

  const prev = React.useCallback(() => {
    if (count === 0) return;
    goTo(index - 1);
  }, [goTo, index, count]);

  React.useEffect(() => {
    if (!autoPlay || count <= 1) return;

    const id = setInterval(() => {
      setIndex((i) => (i + 1) % count);
    }, safeInterval);

    return () => clearInterval(id);
  }, [autoPlay, count, safeInterval]);

  if (count === 0) return null;

  return (
    <div
      ref={containerRef}
      tabIndex={0}
      aria-roledescription="carousel"
      aria-label="Carrousel d'images"
      className={clsx("relative mx-auto w-full max-w-xl", className)}
    >
      <div
        className={clsx(
          "overflow-hidden w-full h-64 sm:h-72 md:h-80",
          rounded && "rounded-2xl shadow-sm"
        )}
      >
        <div
          className="flex h-full transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slides.map((slide, i) => {
            if (!slide?.src) return null;

            return (
              <div
                key={i}
                className="relative w-full h-full shrink-0 flex items-center justify-center bg-white"
              >
                <img
                  src={slide.src}
                  alt={slide.alt ?? `Slide ${i + 1}`}
                  className="max-h-full max-w-full object-contain"
                  draggable={false}
                />
              </div>
            );
          })}
        </div>
      </div>

      {showArrows && count > 1 && (
        <>
          <button
            type="button"
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white px-3 py-2 rounded-full shadow text-sm"
          >
            ←
          </button>
          <button
            type="button"
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white px-3 py-2 rounded-full shadow text-sm"
          >
            →
          </button>
        </>
      )}

      {showIndicators && count > 1 && (
        <div className="absolute inset-x-0 bottom-3 flex justify-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
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
