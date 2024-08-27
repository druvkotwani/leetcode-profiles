import type { Metadata } from "next";
import { Inter, Source_Code_Pro } from "next/font/google";
import "./globals.css";
import { DataProvider } from "./context/DataContext";
import { Analytics } from "@vercel/analytics/react";

const sourcecodepro = Source_Code_Pro({
  subsets: ["latin"],
  variable: "--font-sourcecodepro",
});

export const metadata: Metadata = {
  title: "Leetcode Profiles",
  description: "Generate your Leetcode Stats",
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
      </body>
    </html>
  );
}
