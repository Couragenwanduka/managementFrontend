import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Sora } from "next/font/google";
import "./globals.css";

// Load fonts as variables (this works well with Tailwind + CSS custom properties)
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Courage Group",
  description: "Courage Group",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}  ${sora.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
