// components/sections/WhyIconSphere.tsx

import React from 'react';
import { PageData } from '@/lib/types';

const AdvantagePoint = ({ title, description }: { title: string, description: string }) => (
  <div className="p-6 bg-gray-900/30 rounded-lg border border-gray-800">
    <h4 className="text-xl font-semibold text-white">{title}</h4>
    <p className="mt-2 text-gray-400">{description}</p>
  </div>
);

interface WhyIconSphereProps {
  data: PageData['whyUsSection'];
}

const WhyIconSphere = ({ data }: WhyIconSphereProps) => {
  return (
    <section id="why-us" className="py-20 sm:py-32 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            {data.headline}
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            {data.subheadline}
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.points.map((point) => (
            <AdvantagePoint
              key={point._id}
              title={point.title}
              description={point.description}
            />
          ))}
        </div>
        <p className="mt-16 text-center text-xl text-gray-400 italic max-w-4xl mx-auto">
          "{data.trustStatement}"
        </p>
      </div>
    </section>
  );
};

export default WhyIconSphere;