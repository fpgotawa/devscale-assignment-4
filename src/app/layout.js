import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { HeroUIProvider } from "@heroui/react";
import { ToastProvider } from "@heroui/toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "moodTrackers",
  description: "Assignment-4 Devscale",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <HeroUIProvider>
          <ToastProvider />
          <div className="h-screen bg-gradient-to-br from-emerald-600 to-indigo-500">
            {children}
          </div>
        </HeroUIProvider>
      </body>
    </html>
  );
}
