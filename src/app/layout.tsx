import type { Metadata } from "next";
import { Urbanist, Poppins } from "next/font/google";
import "./globals.css";

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Risk App",
  description: "Risk management application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${urbanist.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-body text-foreground bg-background">
        {children}
      </body>
    </html>
  );
}
