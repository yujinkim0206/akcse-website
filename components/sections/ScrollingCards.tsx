"use client";

import Image from "next/image";

import card1 from "@/public/images/card1.webp";
import card2 from "@/public/images/card2.webp";
import card3 from "@/public/images/card3.webp";
import card4 from "@/public/images/card4.webp";
import card5 from "@/public/images/card5.webp";

export default function ScrollingCards() {
  const items = [
    { src: card1, alt: "" },
    { src: card2, alt: "" },
    { src: card3, alt: "" },
    { src: card4, alt: "" },
    { src: card5, alt: "" },
  ];

  const doubled = [...items, ...items];
  const DURATION = 80;

  return (
    <section className="overflow-hidden section-spacing">
      <div
        className="flex w-max h-[var(--card-height)] animate-[marquee_linear_infinite] items-center justify-center will-change-transform"
        style={{ animationDuration: `${DURATION}s` }}
        onContextMenu={(e) => e.preventDefault()}
      >
        {doubled.map((item, i) => (
          <div
            key={i}
            className="relative aspect-[3/4] h-[var(--card-height)] shrink-0 overflow-hidden"
          >
            <Image
              src={item.src}
              alt={item.alt}
              draggable={false}
              className="object-cover pointer-events-none select-none [-webkit-user-drag:none] [-webkit-touch-callout:none]"
              sizes="(max-width: 640px) 390px, (max-width: 1024px) 450px, 100vh"
              quality={100}
              priority
              fill
            />
          </div>
        ))}
      </div>
    </section>
  );
}
