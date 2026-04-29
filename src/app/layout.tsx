import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const space = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Silisyumun Yolculuğu | Kumdan Bilgisayar Çipine",
    template: "%s | Silisyumun Yolculuğu",
  },
  description:
    "Yer kabuğunda en bol bulunan ikinci element olan silisyumun, kuvars kumundan başlayarak bilgisayar çipine dönüşüm yolculuğunu etkileşimli olarak keşfedin.",
  keywords: [
    "silisyum",
    "yarı iletken",
    "mikroçip",
    "kumdan çipe",
    "fotolitografi",
    "Czochralski",
    "sürdürülebilirlik",
    "e-atık",
  ],
  authors: [{ name: "Muhammet Çetinalp" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${inter.variable} ${space.variable}`}>
      <body className="min-h-screen bg-sand-50 font-sans text-silicon-800 antialiased">
        <div className="relative min-h-screen overflow-x-hidden">
          <div
            aria-hidden
            className="pointer-events-none fixed inset-0 -z-10 bg-grid-pattern bg-[size:48px_48px] opacity-40"
          />
          <div
            aria-hidden
            className="pointer-events-none fixed inset-x-0 top-0 -z-10 h-[480px] bg-circuit-glow"
          />
          <Navbar />
          <main className="relative pt-20">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
