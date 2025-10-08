import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    template: "%s | AKCSE UofT",
    default: "AKCSE UofT",
  },
  description:
    "The Association of Korean-Canadian Scientists and Engineers at the University of Toronto supports Korean-Canadian students in STEM through academic, professional, and cultural initiatives.",
  metadataBase: new URL("https://akcseuoft.ca/"),
  openGraph: {
    title: "AKCSE UofT",
    description:
      "The Association of Korean-Canadian Scientists and Engineers at the University of Toronto",
    url: "https://akcseuoft.ca/",
    siteName: "AKCSE UofT",
    images: [
      {
        url: "/images/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
