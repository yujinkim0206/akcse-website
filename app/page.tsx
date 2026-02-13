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
          AlphaSights Seoul 채용 안내
        </h2>

        <p className="text-[var(--subtitle)]">
          Client Service Associate (Full-time, 서울 근무)
        </p>

        <div className="mx-auto mt-10 flex max-w-3xl flex-col gap-12">
          <div className="relative w-full overflow-hidden">
            <Image
              src="/images/temp/a1.jpg"
              alt=""
              width={2250}
              height={3764}
              className="h-auto w-full"
              priority
            />
          </div>

          <div className="relative w-full overflow-hidden">
            <Image
              src="/images/temp/a2.jpg"
              alt=""
              width={2917}
              height={10409}
              className="h-auto w-full"
              priority
            />
          </div>
        </div>
      </div>
    </main>
  );
}
