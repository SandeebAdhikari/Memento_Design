import type { Metadata } from "next";
import "./globals.css";
import { Jost } from "next/font/google";

const jost = Jost({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // Specify the weights you want
  variable: "--font-jost",
});

export const metadata: Metadata = {
  title: "MEMENTO DESIGN",
  description:
    "Memento Design is a design studio that specializes in creating beautiful and functional websites and applications.",
  icons: {
    icon: "/icons/sa-favicon-black.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jost.variable}`}>{children}</body>
    </html>
  );
}
