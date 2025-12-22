import Carousel from "@/components/ui/Carousel";
import { supabase } from "@/lib/supabaseClient";
import Image from "next/image";
import Button from "@/components/ui/Button";

export default async function SponsorHallasan() {
  const { data, error } = await supabase
    .from("carousel")
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
        <h2 className="text-sm sm:text-base text-[var(--subtitle)]">Sponsor</h2>
        <div className="flex items-center gap-1 mb-1 sm:mb-2">
          <h3 className="text-4xl sm:text-5xl">Hallasan</h3>
          <Image
            src="/images/hallasan_logo.jpg"
            alt=""
            width={70}
            height={70}
            className="h-[50px] w-[50px] sm:h-[65px] sm:w-[65px]"
          />
        </div>
        <p className="mb-3 sm:mb-5">
          Hallasan is a premium soju from Jeju Island, South Korea, made using
          naturally alkaline, volcanic rock-filtered water, which gives it a
          clean and crisp taste. The original version is known for a higher
          alcohol content 21% and smooth profile, while flavored varieties, such
          as Mandarin and Lychee, are made with natural fruit juice for a
          balanced sweetness. It's often served cold and is versatile for
          sipping or mixing in cocktails.
        </p>
        <Button
          href="https://www.instagram.com/hallasansoju.ca?igsh=NW0wdmk2ZGszYjRo"
          external
        >
          Explore
        </Button>
      </div>
      <div className="w-full md:w-[50%]">
        <Carousel slides={data} className="aspect-[1/1] w-full" />
      </div>
    </section>
  );
}
