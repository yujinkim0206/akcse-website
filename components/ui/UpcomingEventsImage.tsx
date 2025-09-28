import Image from "next/image";

export default function UpcomingEventsImage() {
  return (
    <div className="relative aspect-[2/3] h-auto w-full md:w-[35%]">
      <Image
        src="/images/upcomingevents.avif"
        alt="Upcoming Events"
        fill
        className="object-cover"
        sizes="(min-width: 768px) 20%, 100vw"
      />
    </div>
  );
}
