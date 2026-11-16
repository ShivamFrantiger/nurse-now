import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "NurseNow — On-Demand Healthcare Staffing | Work on Your Own Terms",
  description:
    "Join NurseNow as a contract nursing partner. Say goodbye to heavy hospital workloads, pick your own shifts, earn up to ₹75,000/month with direct weekly payouts.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-[#FAFCFB] text-[#142D3A]">
        {children}
      </body>
    </html>
  );
}
