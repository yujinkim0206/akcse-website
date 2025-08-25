import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="flex min-h-[100dvh] items-center bg-black text-white">
      <div className="wrap">
        <div className="w-1/2 space-y-8">
          <h2 className="text-4xl font-medium">
            Association of Korean-Canadian <br />
            Scientists and Engineers at the <br />
            University of Toronto
          </h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum
            labore saepe autem, modi earum molestias rerum consequatur nostrum
            blanditiis. Perferendis dicta fuga maiores corporis incidunt. Cumque
            aliquid ipsum voluptatem et.
          </p>
          <Button href="/about" theme="dark">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
}
