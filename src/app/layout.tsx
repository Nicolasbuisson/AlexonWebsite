import type { Metadata } from "next";
import { fontGotham, fontMadeOuterSans } from "../fonts";
import { Playfair_Display } from "next/font/google";
import "./global.css";
import { Footer } from "../components/footer/footer";

export const metadata: Metadata = {
  title: "Alexon Media",
  description:
    "Alexon Media is a pioneering creative and production house offering commercials, branded, and short form content to your favorite brands worldwide",
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
        {children}
        <Footer />
      </body>
    </html>
  );
}
