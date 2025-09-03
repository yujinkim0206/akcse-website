export default function ScrollingCards() {
  const items = [
    { src: "/images/card1.jpg", alt: "" },
    { src: "/images/card2.jpg", alt: "" },
    { src: "/images/card3.jpg", alt: "" },
    { src: "/images/card4.jpg", alt: "" },
    { src: "/images/card5.jpg", alt: "" },
  ];

  const doubled = [...items, ...items];
  const DURATION = 80;
  const CARD_LENGTH = DURATION / items.length;

  return (
    <section className="overflow-hidden section-spacing">
      <div
        className="flex w-max h-[var(--card-height-hover)] animate-[marquee_linear_infinite] items-center justify-center will-change-transform"
        style={{ animationDuration: `${DURATION}s` }}
      >
        {doubled.map((item, i) => (
          <div
            key={i}
            className="relative aspect-[3/4] h-[var(--card-height)] shrink-0 overflow-hidden bg-black transition-all duration-300 hover:h-[var(--card-height-hover)]"
          >
            <div className="absolute top-1/2 left-1/2 h-[var(--card-height-hover)] w-[calc(var(--card-width)*4)] -translate-x-1/2 -translate-y-1/2">
              <img
                src={item.src}
                alt={item.alt}
                className="h-full w-full animate-[inner-marquee_linear_infinite] object-cover will-change-transform"
                style={{
                  animationDuration: `${DURATION}s`,
                  animationDelay: `-${DURATION - (i + 1) * CARD_LENGTH}s`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
