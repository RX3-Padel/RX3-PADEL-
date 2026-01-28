import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RX3 Padel | Premium Padel Clubs in the UK",
  description:
    "RX3 Padel develops premium padel clubs across the UK, combining world-class facilities with inclusive community programmes.",
  openGraph: {
    title: "RX3 Padel",
    description:
      "Premium padel clubs designed for performance, community and wellbeing.",
    images: ["/rx3-og.jpg"],
  
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
