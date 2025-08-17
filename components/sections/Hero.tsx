// components/sections/Hero.tsx

import React from 'react';
import Button from '../Button';
import { PageData } from '@/lib/types';

interface HeroProps {
  data: Pick<PageData, 'heroHeadline' | 'heroSubheadline' | 'heroSupportiveLine'>;
}

const Hero = ({ data }: HeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden gradient-glow">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tighter">
          {data.heroHeadline}
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-gray-300">
          {data.heroSubheadline}
        </p>
        <p className="mt-4 text-md text-gray-500 italic">
          {data.heroSupportiveLine}
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="#contact-creator" variant="primary" className="w-full sm:w-auto">
            Join Our Creator Pod
          </Button>
          <Button href="#contact-brand" variant="secondary" className="w-full sm:w-auto">
            Ignite a Brand Campaign
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;