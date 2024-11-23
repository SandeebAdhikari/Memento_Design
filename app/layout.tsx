import type { Metadata } from "next";
import "./globals.css";
import { Jost } from "next/font/google";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const jost = Jost({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
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
      <body className={`${jost.variable}`}>
        <div className="mx-[164px]">
          <NavBar />
        </div>
        {children}
        <div className="mt-80">
          <Footer />
        </div>
      </body>
    </html>
  );
}
