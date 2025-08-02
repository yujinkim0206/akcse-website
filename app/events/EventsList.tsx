import { createClient } from "@supabase/supabase-js";

import config from "../config";
import EventCard from "./EventCard";

const supabaseUrl = config.supabaseUrl;
const supabaseKey = config.supabaseKey;
const options = {
  db: {
    schema: "public",
  },
};
const supabase = createClient(supabaseUrl, supabaseKey, options);

export default async function EventsList() {
  const { data, error } = await supabase
    .from("events")
    .select()
    .eq("public", true)
    .order("date", { ascending: false });

  return (
    <main className="bg-background min-h-screen pr-[10vw] pl-[10vw]">
      {error && (
        <p className="text-red-500">Failed to load data: {error.message}</p>
      )}
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl">
        <h1 className="font-bold tracking-tight">Events</h1>
        <h4>Subtitle subtitle subtitle</h4>

        <div className="mt-[24px] grid grid-cols-1 gap-x-[24px] gap-y-[40px]">
          {data?.map((events) => (
            <EventCard key={events.id} events={events} />
          ))}
        </div>
      </div>
    </main>
  );
}
