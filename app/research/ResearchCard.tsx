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
      <div className="group relative cursor-pointer">
        <img
          src={research.preview_img_src}
          className="aspect-square w-full bg-gray-200 object-cover group-hover:opacity-75"
        />
        <div className="mt-[8px]">
          <h6 className="text-xl font-bold">{research.title}</h6>
          <p className="line-clamp-2 text-sm text-[var(--subtitle)]">
            {research.subtitle}
          </p>
        </div>
      </div>
    </Link>
  );
}
