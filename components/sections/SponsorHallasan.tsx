import Carousel from "@/components/ui/Carousel";
import { supabase } from "@/lib/supabaseClient";
import Image from "next/image";
import Button from "@/components/ui/Button";

export default async function SponsorHallasan() {
  const { data, error } = await supabase
    .from("hallasan")
    .select("src, alt")
    .order("order", { ascending: true });

  if (error) {
    return (
      <section className="wrap section-spacing">
        <p className="text-red-500">Failed to load data: {error.message}</p>
      </section>
    );
  }

  return (
    <section className="wrap section-spacing flex flex-col items-center justify-between gap-12 md:flex-row md:gap-0">
      <div className="md:w-[45%]">
        <h2 className="font-medium">( Sponsor )</h2>
        <div className="flex items-center gap-1 sm:mb-2">
          <h3 className="text-4xl sm:text-5xl">Hallasan</h3>
          <Image
            src="/images/hallasan_logo.jpg"
            alt=""
            width={75}
            height={75}
            className="h-[60px] w-[60px] sm:h-[75px] sm:w-[75px]"
          />
        </div>
        <p className="mb-3 sm:mb-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus
          veritatis dolorem consequuntur nihil pariatur natus tempore
          repudiandae officiis quibusdam a ut repellat maxime quis, sapiente
          eaque atque laboriosam ullam sequi?
        </p>
        <Button href="" external>
          Explore
        </Button>
      </div>
      <div className="w-full md:w-[50%]">
        <Carousel slides={data} className="aspect-[1/1] w-full" />
      </div>
    </section>
  );
}
