"use client";

type Events = {
  id: string;
  title: string;
  description: string;
  img_src: string;
  date: string;
};

export default function EventCard({ events }: { events: Events }) {
  return (
    <div className="flex gap-[5vw]">
      <img src={events.img_src} className="aspect-video w-4/10 object-cover" />
      <div className="flex w-6/10 flex-col justify-center">
        <h4 className="text-xl sm:text-3xl mb-1 sm:mb-2">{events.title}</h4>
        <p className="sm:mt-[8px] line-clamp-4 mb-1 sm:mb-2">{events.description}</p>
        <p className="sm:mt-[8px] text-sm text-[var(--subtitle)]">
          {events.date.split("T")[0]}
        </p>
      </div>
    </div>
  );
}
