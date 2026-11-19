import type { Metadata } from "next";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import SmoothScroll from "@/components/SmoothScroll";
import { Anton, Inter } from "next/font/google";

const geist = Inter({ subsets: ["latin"], variable: "--font-sans" });
const anton = Anton({ subsets: ["latin", "latin-ext"], weight: "400", variable: "--font-anton" });

export const metadata: Metadata = {
  title: "Portfolio - Bartłomiej Klimek",
  description: "Hi, I’m Bartłomiej Klimek – a 20-year-old Next.js Frontend Developer from Silesia, Poland. I've been building detail-oriented web applications since 2022, turning ideas into clean, functional code.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={cn("font-firjar", "font-sans", geist.variable, anton.variable)}>
      <body>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
