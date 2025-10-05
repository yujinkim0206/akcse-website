"use client";

import Link from "next/link";

type Research = {
  id: string;
  title: string;
  subtitle: string;
  published_date: string;
  preview_img_src: string;
};

export default function ResearchCard({ research }: { research: Research }) {
  return (
    <Link href={`/research/${research.id}`}>
      <div className="relative aspect-square w-[1/3] overflow-hidden">
        <img
          src={research.preview_img_src}
          className="h-full w-full bg-gray-200 object-cover transition duration-300 ease-in-out hover:scale-105"
        />
      </div>
      <div className="group relative cursor-pointer">
        <div className="mt-3">
          <h6 className="text-lg sm:text-xl font-medium mb-1">{research.title}</h6>
          <p className="line-clamp-2 text-sm text-[var(--subtitle)]">
            {research.subtitle}
          </p>
        </div>
      </div>
    </Link>
  );
}
