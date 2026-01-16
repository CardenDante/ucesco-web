import type { Metadata } from "next";
import { Sora } from "next/font/google";
import { Navbar, Footer } from "@/components/layout";
import { Toaster } from "@/components/ui/sonner";
import { BackToTop } from "@/components/ui/back-to-top";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "UCESCO Africa - Building Futures, Transforming Lives",
  description: "UCESCO Africa is a non-profit organization dedicated to empowering communities through education, healthcare, and sustainable development programs in Kenya and Uganda.",
  keywords: ["NGO", "charity", "education", "healthcare", "Africa", "sponsor a child", "volunteer", "donate"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${sora.variable} font-sans antialiased`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <BackToTop />
        <Toaster />
      </body>
    </html>
  );
}
