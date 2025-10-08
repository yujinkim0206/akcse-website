import Hero from "@/components/sections/Hero";
import FeaturedResearch from "@/components/sections/FeaturedResearch";
import UpcomingEvents from "@/components/sections/UpcomingEvents";
import ScrollingCards from "@/components/sections/ScrollingCards";
export default function Home() {
  return (
    <main>
      <Hero />
      <ScrollingCards />
      <FeaturedResearch />
      <UpcomingEvents />
    </main>
  );
}
