import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Mimi Spicy Offals",
  description:
    "Boldly Crafted. Perfectly Spiced. Experience high-intensity, deeply savory peppered local delicacies slow-simmered for a true flavor explosion.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body
        className={`${poppins.variable} font-sans h-full flex flex-col antialiased bg-[#FAF9F6]`}
      >
        <Header />

        <SpeedInsights />
        <Analytics />
        <main className="grow">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
