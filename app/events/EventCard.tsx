"use client";

import { useEffect, useState } from "react";
import Button from "@/components/ui/Button";

type Events = {
  id: string;
  title: string;
  description: string;
  img_src: string;
  date: string;
  video_src?: string | null;
};

function getYouTubeEmbedUrl(url: string): string | null {
  try {
    const parsed = new URL(url);
    let videoId: string | null = null;

    if (parsed.hostname.includes("youtu.be")) {
      videoId = parsed.pathname.slice(1);
    } else if (parsed.hostname.includes("youtube.com")) {
      if (parsed.pathname === "/watch") {
        videoId = parsed.searchParams.get("v");
      } else if (parsed.pathname.startsWith("/embed/")) {
        videoId = parsed.pathname.split("/embed/")[1];
      } else if (parsed.pathname.startsWith("/live/")) {
        videoId = parsed.pathname.split("/live/")[1];
      } else if (parsed.pathname.startsWith("/shorts/")) {
        videoId = parsed.pathname.split("/shorts/")[1];
      }
    }

    return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
  } catch {
    return null;
  }
}

export default function EventCard({ events }: { events: Events }) {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const embedUrl = events.video_src
    ? getYouTubeEmbedUrl(events.video_src)
    : null;

  useEffect(() => {
    document.body.style.overflow = isVideoOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isVideoOpen]);

  return (
    <div className="flex gap-[5vw]">
      <img src={events.img_src} className="aspect-video w-4/10 object-cover" />
      <div className="flex w-6/10 flex-col justify-center">
        <h4 className="text-lg sm:text-3xl mb-1 sm:mb-2">{events.title}</h4>
        <p className="sm:mt-[8px] line-clamp-4 mb-1 sm:mb-2">{events.description}</p>
        <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
          <p className="sm:mt-[8px] text-[var(--subtitle)]">
            {events.date.split("T")[0]}
          </p>
          {embedUrl && (
          <div className="mb-1 sm:mb-2 w-fit">
            <Button onClick={() => setIsVideoOpen(true)} theme="transparent">
              Link to Recording
            </Button>
          </div>
        )}
        </div>
      </div>

      {embedUrl && isVideoOpen && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 px-4"
          onClick={() => setIsVideoOpen(false)}
        >
          <button
            type="button"
            onClick={() => setIsVideoOpen(false)}
            aria-label="Close video"
            className="fixed top-4 right-4 sm:top-6 sm:right-6 z-10 text-4xl leading-none text-white hover:text-[var(--hover-white)]"
          >
            &times;
          </button>
          <div
            className="relative w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={embedUrl}
              title={`${events.title} recording`}
              className="aspect-video w-full z-10"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </div>
  );
}
