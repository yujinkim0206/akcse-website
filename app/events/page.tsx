import EventsList from "./EventsList";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events",
  robots: {
    index: false,
    follow: false,
  },
};

export default function Events() {
  return (
    <main className="mt-[var(--header)] flex-row justify-center">
      <EventsList></EventsList>
    </main>
  );
}
