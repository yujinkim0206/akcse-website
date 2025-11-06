"use client";

import { useEffect, useState } from "react";

type Slide = { src: string; alt?: string };

export default function Carousel({
  slides,
  interval = 3500,
  className = "",
}: {
  slides: Slide[];
  interval?: number;
  className?: string;
}) {
  const [i, setI] = useState(0);
  const n = slides.length;

  useEffect(() => {
    const id = setInterval(() => setI((i) => (i + 1) % n), interval);
    return () => clearInterval(id);
  }, [i, interval, n]);

  const prev = () => setI((i) => (i - 1 + n) % n);
  const next = () => setI((i) => (i + 1) % n);

  return (
    <div className="flex items-center justify-end md:gap-4">
      <button type="button" onClick={prev} className="hidden sm:block">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-black transition-colors duration-300 hover:text-[var(--hover-black)]"
          viewBox="0 0 512 512"
        >
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="square"
            strokeMiterlimit="10"
            strokeWidth="30"
            d="M328 112L184 256l144 144"
          />
        </svg>
      </button>
      <div className={`relative overflow-hidden ${className}`}>
        <div
          className="flex h-full transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${i * 100}%)` }}
        >
          {slides.map((s, idx) => (
            <div key={idx} className="h-full w-full shrink-0">
              <img
                src={s.src}
                alt={s.alt}
                className="constrast-110 h-full w-full object-cover object-center"
              />
            </div>
          ))}
        </div>
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-sm text-white/70">
          <span className="text-white">{i + 1}</span> / {n}
        </div>
      </div>
      <button type="button" onClick={next} className="hidden sm:block">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-black transition-colors duration-300 hover:text-[var(--hover-black)]"
          viewBox="0 0 512 512"
        >
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="square"
            strokeMiterlimit="10"
            strokeWidth="30"
            d="M184 112l144 144-144 144"
          />
        </svg>
      </button>
    </div>
  );
}
