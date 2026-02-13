import type { Metadata } from "next";
import { Montserrat, Dancing_Script } from "next/font/google";
import "./globals.css";
import { Toaster } from "./Toaster";
import SplashLayout from "./components/common/splash-layout";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  subsets: ["latin"],
  display: "swap",
  preload: false, // defer secondary font to avoid blocking LCP
});

export const metadata: Metadata = {
  title: "SMP Agency",
  description:
    "SMP AGENCY is a leading content creation agency that helps businesses grow their audience and revenue through content marketing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" as="video" href="/Videos/Ads1.mp4" />
        <link rel="preload" as="video" href="/Videos/hero-background-vid.mov" />
      </head>
      <body
        className={`${montserrat.variable} ${dancingScript.variable} antialiased bg-black`}
      >
        <SplashLayout>{children}</SplashLayout>
        <Toaster />
      </body>
    </html>
  );
}
