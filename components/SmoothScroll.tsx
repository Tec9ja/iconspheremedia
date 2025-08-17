// components/SmoothScroll.tsx

"use client";

import { ReactNode, useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import { usePathname } from 'next/navigation';

const SmoothScroll = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Clean up on component unmount
    return () => {
      lenis.destroy();
    };
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);


  return <>{children}</>;
};

export default SmoothScroll;