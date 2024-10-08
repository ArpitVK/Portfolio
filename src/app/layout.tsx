import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Arpit Vishwakarma",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" >
      <body className={` ${inter.className }`} data-new-gr-c-s-check-loaded="14.1191.0" data-gr-ext-installed>{children}</body>
    </html>
  );
}
