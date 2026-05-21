import Hero from "@/components/sections/Hero";
import FeaturedResearch from "@/components/sections/FeaturedResearch";
import UpcomingEvents from "@/components/sections/UpcomingEvents";
import ScrollingCards from "@/components/sections/ScrollingCards";
import SponsorHallasan from "@/components/sections/SponsorHallasan";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />
      <ScrollingCards />
      <FeaturedResearch />
      <UpcomingEvents />
      <SponsorHallasan />
      <div className="wrap section-spacing">
        <h2 className="mb-2 text-3xl sm:mb-4 sm:text-4xl">
          AlphaSights Global Career Talk
        </h2>

        {/* <p className="text-[var(--subtitle)]">
          From Study in Canada to Global Career
        </p> */}

        <div className="mx-auto mt-10 flex max-w-3xl flex-col gap-3">
          <div className="relative w-full overflow-hidden">
            <Image
              src="/images/temp/a1.png"
              alt=""
              width={1472}
              height={1840}
              className="h-auto w-full"
              priority
            />
          </div>

          <div className="relative w-full overflow-hidden">
            <Image
              src="/images/temp/a2.png"
              alt=""
              width={1472}
              height={1834}
              className="h-auto w-full"
              priority
            />
          </div>
        </div>
      </div>
    </main>
  );
}
