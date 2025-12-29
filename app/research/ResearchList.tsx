"use client";

import { useEffect, useMemo, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { Chip } from "@heroui/chip";

import ResearchCard from "./ResearchCard";
import config from "../config";

const supabase = createClient(config.supabaseUrl, config.supabaseKey, {
  db: { schema: "public" },
});

const CATEGORY_COLUMN = "category" as const;

const CATEGORY_VALUE = {
  life: "life",
  tech: "tech",
} as const;

type ResearchRow = any;

export default function ResearchList() {
  const [selected, setSelected] = useState({
    all: true,
    life: false,
    tech: false,
  });

  const [data, setData] = useState<ResearchRow[]>([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const activeCategories = useMemo(() => {
    if (selected.all) return "all" as const;

    const cats: string[] = [];
    if (selected.life) cats.push(CATEGORY_VALUE.life);
    if (selected.tech) cats.push(CATEGORY_VALUE.tech);
    return cats;
  }, [selected]);

  const handleClick = (category: "all" | "life" | "tech") => {
    setSelected((prev) => {
      if (category === "all") {
        return { all: true, life: false, tech: false };
      }

      if (prev[category]) {
        return { all: true, life: false, tech: false };
      }

      return {
        all: false,
        life: category === "life",
        tech: category === "tech",
      };
    });
  };

  useEffect(() => {
    const fetchResearch = async () => {
      setLoading(true);
      setErrorMsg(null);

      try {
        let query = supabase
          .from("research")
          .select()
          .eq("published", true)
          .order("published_date", { ascending: false });

        if (activeCategories !== "all") {
          if (activeCategories.length === 1) {
            query = query.eq(CATEGORY_COLUMN, activeCategories[0]);
          } else {
            query = query.in(CATEGORY_COLUMN, activeCategories);
          }
        }

        const { data: rows, error } = await query;
        if (error) throw error;

        setData(rows ?? []);
      } catch (err: any) {
        setErrorMsg(err?.message ?? "Failed to load data.");
        setData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchResearch();
  }, [activeCategories]);

  return (
    <main className="bg-background wrap min-h-screen">
      <div className="mx-auto max-w-2xl flex-row py-[64px] sm:py-[96px] lg:max-w-[1280px]">
        <h1 className="mb-1 text-3xl font-light sm:mb-2 sm:text-5xl">
          Research & Literature
        </h1>

        <h4 className="text-[var(--subtitle)]">
          Monthly publications on medicine and technology
        </h4>

        <div className="mt-5 flex gap-2">
          <Chip
            className={`rounded-full px-4 py-2 ${
              selected.all ? "bg-black text-white" : "bg-gray-200 text-black"
            }`}
            variant="flat"
            onClick={() => handleClick("all")}
          >
            All
          </Chip>

          <Chip
            className={`rounded-full px-4 py-2 ${
              selected.life ? "bg-black text-white" : "bg-gray-200 text-black"
            }`}
            variant="flat"
            onClick={() => handleClick("life")}
          >
            Life
          </Chip>

          <Chip
            className={`rounded-full px-4 py-2 ${
              selected.tech ? "bg-black text-white" : "bg-gray-200 text-black"
            }`}
            variant="flat"
            onClick={() => handleClick("tech")}
          >
            Tech
          </Chip>
        </div>

        {errorMsg && <p className="mt-4 text-red-500">{errorMsg}</p>}
        {loading && <p className="mt-4 opacity-70">Loading...</p>}

        <div className="mt-10 grid grid-cols-1 gap-x-[24px] gap-y-[40px] sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-[32px]">
          {data?.map((project) => (
            <ResearchCard key={project.id} research={project} />
          ))}
        </div>
      </div>
    </main>
  );
}
