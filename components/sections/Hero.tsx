import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="flex h-[calc(100vh*2/3)] items-end justify-between gap-10 px-4 md:px-6 py-4">
      <h2 className="shrink-0 text-[6vw] sm:text-[clamp(1.875rem,5vw,3rem)] leading-none font-extralight tracking-tighter">
        Association of Korean-Canadian <br />
        Scientists and Engineers at the <br />
        University of Toronto
      </h2>
      <div className="hidden w-1/2 flex-col items-end xl:flex">
        <p className="text-md mb-2 text-right">
          The Association of Korean-Canadian Scientists and Engineers at the
          University of Toronto is a non-profit professional organization to
          support sharing scientific knowledge between Korean-Canadians and
          setting up connections between Korea and Canada for further
          development.
        </p>
        <Button href="/about" theme="transparent">
          Learn More
        </Button>
      </div>
    </section>
  );
}
