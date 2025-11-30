import ResearchList from "./ResearchList";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Research & Literature",
  robots: {
    index: false,
    follow: false,
  },
};

export default function Research() {
  return (
    <main className="mt-[var(--header)] flex-row">
      <ResearchList></ResearchList>
    </main>
  );
}
