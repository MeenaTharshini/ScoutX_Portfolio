import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://scoutx.example.com"),

  title: {
    default: "ScoutX — Discover What People Can Build",
    template: "%s | ScoutX",
  },

  description:
    "ScoutX is an innovation discovery platform connecting real-world problems with emerging innovators, evidence-backed prototypes, and opportunities.",

  keywords: [
    "ScoutX",
    "innovation discovery",
    "student innovators",
    "prototypes",
    "innovation platform",
    "startup",
    "talent discovery",
    "problem solving",
    "hackathon projects",
    "early stage innovation",
  ],

  authors: [
    {
      name: "ScoutX Team",
    },
  ],

  creator: "ScoutX",

  applicationName: "ScoutX",

  icons: {
    icon: "/assets/logo.png",
    apple: "/assets/logo.png",
  },

  openGraph: {
    title: "ScoutX — Discover What People Can Build",
    description:
      "A discovery layer connecting real-world problems with innovators and promising prototypes.",
    type: "website",
    siteName: "ScoutX",
    locale: "en_IN",
  },

  twitter: {
    card: "summary_large_image",
    title: "ScoutX — Discover What People Can Build",
    description:
      "Connecting real-world problems with emerging innovators and promising prototypes.",
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}