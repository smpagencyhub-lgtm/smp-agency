import type { Metadata } from "next";
import { Montserrat, Dancing_Script } from "next/font/google";
import "./globals.css";
import { Toaster } from "./Toaster";

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
  title: "SMP Management",
  description:
    "Apply to become a model and start your journey as a content creator",
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
      </head>
      <body
        className={`${montserrat.variable} ${dancingScript.variable} antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
