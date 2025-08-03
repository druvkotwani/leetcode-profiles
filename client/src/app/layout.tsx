import type { Metadata } from "next";
import { Inter, Source_Code_Pro } from "next/font/google";
import "./globals.css";
import { DataProvider } from "./context/DataContext";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const sourcecodepro = Source_Code_Pro({
  subsets: ["latin"],
  variable: "--font-sourcecodepro",
});

export const metadata: Metadata = {
  title: "Leetcode Profiles",
  description: "Generate your Leetcode Stats",
  openGraph: {
    title: "Leetcode Profiles",
    description: "Generate your Leetcode Stats",
    url: "https://leetcode-profiles.dhruvkotwani.xyz",
    images: [
      {
        url: "https://leetcode-profiles.dhruvkotwani.xyz/og.png",
        width: 1200,
        height: 630,
        alt: "Leetcode Profiles",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Leetcode Profiles",
    description: "Generate your Leetcode Stats",
    images: ["https://leetcode-profiles.dhruvkotwani.xyz/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={sourcecodepro.variable}>
        <DataProvider>{children}</DataProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
