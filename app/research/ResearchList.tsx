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
    <main className="bg-background wrap min-h-screen">
      {error && (
        <p className="text-red-500">Failed to load data: {error.message}</p>
      )}
      <div className="mx-auto max-w-2xl flex-row py-[64px] sm:py-[96px] lg:max-w-[1280px]">
        <h1 className="mb-2 md:mb-4 text-4xl md:text-5xl font-light">
          Research & Literature
        </h1>
        <h4 className="text-[var(--subtitle)]">
          Monthly publications on life science and technology
        </h4>

        <div className="mt-10 grid grid-cols-1 gap-x-[24px] gap-y-[40px] sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-[32px]">
          {data?.map((project) => (
            <ResearchCard key={project.id} research={project} />
          ))}
        </div>
      </div>
    </main>
  );
}
