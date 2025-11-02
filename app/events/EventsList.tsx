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
      <div className="py-16 sm:py-24">
        <h1 className="mb-1 sm:mb-2 text-3xl sm:text-5xl font-light">Events</h1>
        <h4 className="text-[var(--subtitle)]">
          Past educational and social events at AKCSE UofT
        </h4>

        <div className="mt-10 grid grid-cols-1 gap-x-[24px] gap-y-[40px]">
          {data?.map((events) => (
            <EventCard key={events.id} events={events} />
          ))}
        </div>
      </div>
    </main>
  );
}
