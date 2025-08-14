import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata = {
  title: "Ismail Shaikh | Portfolio",
  description: "Frontend Developer Portfolio built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-950 dark:to-black text-zinc-800 dark:text-zinc-100">
        {children}
      </body>
    </html>
  );
}
