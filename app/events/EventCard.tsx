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
      <img
        src={events.img_src}
        className="w-4/10 aspect-video rounded-md object-cover"
      />
      <div className="w-6/10 flex flex-col justify-center">
        <h4 className="font-bold">{events.title}</h4>
        <p className="mt-[8px] text text-gray-500 line-clamp-2">
          {events.description}
        </p>
        <p className="mt-[8px] text text-gray-500">{events.date}</p>
      </div>
    </div>
  );
}
