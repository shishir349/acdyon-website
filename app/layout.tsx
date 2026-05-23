import type { Metadata } from "next";
import { DM_Serif_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingCTA from "@/components/common/FloatingCTA";

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "AcdyOn — Premium Global Education & Executive Learning Platform",
    template: "%s | AcdyOn",
  },
  description:
    "AcdyOn is a premium global education ecosystem offering AI mastery, executive certifications, doctoral pathways, and honorary recognition for ambitious professionals worldwide.",
  keywords: [
    "executive education",
    "AI courses",
    "doctoral programs",
    "honorary recognition",
    "global education",
    "online learning",
    "professional development",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://acdyon.com",
    siteName: "AcdyOn",
    title: "AcdyOn — Premium Global Education & Executive Learning Platform",
    description:
      "Executive education, AI mastery, doctoral pathways, and honorary recognition for ambitious professionals and global leaders.",
  },
  twitter: {
    card: "summary_large_image",
    title: "AcdyOn — Premium Global Education",
    description:
      "Executive education, AI mastery, doctoral pathways, and honorary recognition.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${dmSerif.variable} ${inter.variable} antialiased min-h-screen`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
