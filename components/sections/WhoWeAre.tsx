// components/sections/WhoWeAre.tsx
"use client";

import React, { useRef } from 'react';
import { PageData } from '@/lib/types';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

interface WhoWeAreProps {
  data: Pick<PageData, 'whoWeAreHeadline' | 'whoWeAreSubheadline' | 'whoWeAreTrustLine'>;
}

const WhoWeAre = ({ data }: WhoWeAreProps) => {
  const container = useRef(null);
  const logos = ["Google", "Meta", "Amazon", "Netflix", "Spotify"];

  useGSAP(() => {
    // Animate elements when they scroll into view
    gsap.from(".fade-in", {
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 0.8,
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%", // Start animation when top of the section is 80% from the top of the viewport
      }
    });
  }, { scope: container });

  return (
    <section ref={container} id="about" className="py-20 sm:py-32 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="fade-in text-sm font-semibold text-gray-400 tracking-wider uppercase">
            Trusted by Innovative Brands Worldwide
          </h3>
          <div className="fade-in mt-8 flex justify-center items-center gap-8 md:gap-12 flex-wrap">
            {logos.map((logo) => (
              <span key={logo} className="text-2xl font-medium text-gray-500">{logo}</span>
            ))}
          </div>
        </div>

        <div className="mt-20 max-w-3xl mx-auto text-center">
          <h2 className="fade-in text-3xl md:text-4xl font-bold text-white">
            {data.whoWeAreHeadline}
          </h2>
          <p className="fade-in mt-6 text-lg text-gray-300">
            {data.whoWeAreSubheadline}
          </p>
          <p className="fade-in mt-4 text-lg text-gray-400">
            {data.whoWeAreTrustLine}
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;