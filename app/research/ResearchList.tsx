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
    <main className="bg-background min-h-screen  pr-[10vw] pl-[10vw]">
      {error && (
        <p className="text-red-500">Failed to load data: {error.message}</p>
      )}
      <div className="mx-auto max-w-2xl px-[16px] py-[64px] sm:px-[24px] sm:py-[96px] lg:max-w-[1280px]">
        <h1 className="font-bold tracking-tight">Research & Literature</h1>
        <h4>Subtitle subtitle subtitle</h4>

        <div className="mt-[24px] grid grid-cols-1 gap-x-[24px] gap-y-[40px] sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-[32px]">
          {data?.map((project) => (
            <ResearchCard key={project.id} research={project} />
          ))}
        </div>
      </div>
    </main>
  );
}
