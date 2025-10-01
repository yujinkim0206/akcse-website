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
    <main className="bg-background wrap mx-auto min-h-screen max-w-7xl">
      {error && (
        <p className="text-red-500">Failed to load data: {error.message}</p>
      )}
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl">
        <h1 className="mb-2 text-5xl font-light tracking-tight">Events</h1>
        <h4 className="text-lg text-[var(--subtitle)]">
          Subtitle subtitle subtitle
        </h4>

        <div className="mt-[24px] grid grid-cols-1 gap-x-[24px] gap-y-[40px]">
          {data?.map((events) => (
            <EventCard key={events.id} events={events} />
          ))}
        </div>
      </div>
    </main>
  );
}
