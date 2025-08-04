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
          className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75"
        />
        <div className="mt-[8px]">
          <h6 className="font-bold">{research.title}</h6>
          <p className=" text-gray-500 line-clamp-2">{research.subtitle}</p>
        </div>
      </div>
    </Link>
  );
}
