import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/reset.scss";
import "./globals.scss";
import { NextIntlClientProvider } from "next-intl";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ორთოპედიული ბალიში | Ekonom.ge – კომფორტი და ჯანსაღი ძილი",
  description:
    "აღმოაჩინე მაღალი ხარისხის ორთოპედიული ბალიში Ekonom.ge-ზე. ჰაერგამტარი მასალა, 800გრ შემავსებელი, ირეცხება სარეცხ მანქანაში. იდეალურია ჯანსაღი ძილისთვის, კისრისა და ზურგის მხარდაჭერისთვის. ზომა: 64x40 სმ.",
  keywords: [
    "ორთოპედიული ბალიში",
    "ბალიში კისრისთვის",
    "comfort pillow",
    "orthopedic pillow",
    "ჰაერგამტარი ბალიში",
    "machine washable pillow",
    "sleep support pillow",
    "Ekonom.ge",
  ],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
