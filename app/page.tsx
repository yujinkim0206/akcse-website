import Hero from "@/components/sections/Hero";
import FeaturedResearch from "@/components/sections/FeaturedResearch";
import UpcomingEvents from "@/components/sections/UpcomingEvents";
import ScrollingCards from "@/components/sections/ScrollingCards";
import Sponsors from "@/components/sections/Sponsors";
import JoinUs from "@/components/sections/JoinUs";

export default function Home() {
  return (
    <main>
      <Hero />
      <ScrollingCards />
      <FeaturedResearch />
      <UpcomingEvents />
      <Sponsors />
      {/* <JoinUs /> */}
    </main>
  );
}
