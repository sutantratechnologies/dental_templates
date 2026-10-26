import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { TopBanner } from "@/components/layout/TopBanner";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloatingButton } from "@/components/layout/WhatsAppFloatingButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Smile Dental Care | Advanced Dental Clinic & Implant Center in Butwal",
  description:
    "Experience gentle, painless modern dentistry in Butwal, Rupandehi. 3D digital dental implants, clear aligners, rotary root canal, cosmetic veneers, and scaling at Milan Chowk.",
  keywords: [
    "Dentist Butwal",
    "Dental Clinic in Butwal",
    "Smile Dental Care Butwal",
    "Dental Implants Butwal Nepal",
    "Painless RCT Butwal",
    "Clear Aligners Nepal",
    "Best Dentist Rupandehi",
    "Milan Chowk Butwal Dental",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col bg-white text-slate-900 font-sans selection:bg-teal-100 selection:text-teal-900"
      >
        <TopBanner />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}
