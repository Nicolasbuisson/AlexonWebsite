import type { Metadata } from "next";
import { fontGotham, fontMadeOuterSans } from "../fonts";
import "./global.css";
import { Footer } from "../components/footer/footer";

export const metadata: Metadata = {
  title: "Alexon Media",
  description:
    "Alexon Media is a pioneering creative and production house offering commercials, branded, and short form content to your favorite brands worldwide",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fontGotham.variable} ${fontMadeOuterSans.variable}`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
