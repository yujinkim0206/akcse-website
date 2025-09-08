import { createClient } from "@supabase/supabase-js";
import ResearchCard from "./ResearchCard";
import config from "../config";

const supabaseUrl = config.supabaseUrl;
const supabaseKey = config.supabaseKey;
const options = {
  db: {
    schema: "public",
  },
};
const supabase = createClient(supabaseUrl, supabaseKey, options);

export default async function ResearchList() {
  const { data, error } = await supabase
    .from("research")
    .select()
    .eq("published", true)
    .order("published_date", { ascending: false });

  return (
    <main className="bg-background .wrap { @apply px-6; } mx-auto min-h-screen max-w-7xl">
      {error && (
        <p className="text-red-500">Failed to load data: {error.message}</p>
      )}
      <div className="mx-auto max-w-2xl flex-row px-[16px] py-[64px] sm:px-[24px] sm:py-[96px] lg:max-w-[1280px]">
        <h1 className="text-5xl font-bold tracking-tight">
          Research & Literature
        </h1>
        <h4 className="text-xl text-[var(--subtitle)]">
          Subtitle subtitle subtitle
        </h4>

        <div className="mt-[24px] grid grid-cols-1 gap-x-[24px] gap-y-[40px] sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-[32px]">
          {data?.map((project) => (
            <ResearchCard key={project.id} research={project} />
          ))}
        </div>
      </div>
    </main>
  );
}
