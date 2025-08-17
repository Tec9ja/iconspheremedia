// app/layout.tsx
"use client"; // Add this since we are using a client-side effect

import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const inter = Inter({ subsets: ["latin"] });

// We don't need metadata here anymore since it's a client component
// You can move metadata to the page.tsx file

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  return (
    <html lang="en">
      <body className={inter.className}>
        <SmoothScroll>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}