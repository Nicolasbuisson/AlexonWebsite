import type { Metadata } from "next";
import { fontGotham, fontMadeOuterSans } from "../fonts";
import { Playfair_Display } from "next/font/google";
import "lenis/dist/lenis.css";
import "./global.css";
import { Footer } from "../components/footer/footer";
import { SmoothScroll } from "../components/smoothScroll/smoothScroll";
import { siteUrl } from "../config/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Alexon Media | Social-First Video Production Agency",
    template: "%s | Alexon Media",
  },
  description:
    "Alexon Media is a pioneering creative and production house offering commercials, branded, and short form content to your favorite brands worldwide",
  twitter: {
    card: "summary_large_image",
  },
};

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["italic"],
  variable: "--ff-playfair-display",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fontGotham.variable} ${fontMadeOuterSans.variable} ${playfair.variable}`}
      >
        <SmoothScroll />
        {children}
        <Footer />
      </body>
    </html>
  );
}
