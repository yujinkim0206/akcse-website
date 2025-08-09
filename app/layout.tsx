import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";

export const metadata: Metadata = {
  title: {
    template: "%s | AKCSE UofT",
    default: "AKCSE UofT",
  },
  description: "The Association of Korean-Canadian Scientists and Engineers at the University of Toronto",
  // metadataBase: new URL(),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <NavBar />
        {children}
      </body>
    </html>
  );
}
