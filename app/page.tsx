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
       <h2 className="section-heading">
         AKCSE UofT First Year Seminar 2026
       </h2>


       {/* <p className="text-[var(--subtitle)]">
         Featured upper-year UofT students who provided practical guidance on
         course enrollment, program selection, bird courses, and campus life,
         helping new students prepare for a successful first year.
       </p> */}
      
       <div className="mx-auto mt-10 flex max-w-5xl flex-col gap-3">
         <div className="relative w-full aspect-video overflow-hidden">
           <iframe
             className="absolute inset-0 h-full w-full"
             src="https://www.youtube.com/embed/79AGzjUwNWQ?si=eiYa9JX4WmVYkWQ3"
             title="YouTube video player"
             frameBorder="0"
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
             referrerPolicy="strict-origin-when-cross-origin"
             allowFullScreen
           />
         </div>
       </div>
     </div>
   </main>
 );
}



