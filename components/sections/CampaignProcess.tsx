// components/sections/CampaignProcess.tsx

import React from 'react';
import { PageData } from '@/lib/types';

const ProcessStep = ({ number, title, description }: { number: string, title: string, description: string }) => (
  <div className="flex items-start space-x-6">
    <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-blue-500/20 text-blue-300 font-bold text-xl border-2 border-blue-500">
      {number}
    </div>
    <div>
      <h4 className="text-xl font-semibold text-white">{title}</h4>
      <p className="mt-2 text-gray-400">{description}</p>
    </div>
  </div>
);

interface CampaignProcessProps {
  data: PageData['campaignProcessSection'];
}

const CampaignProcess = ({ data }: CampaignProcessProps) => {
  return (
    <section id="campaigns" className="py-20 sm:py-32 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            {data.headline}
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            {data.subheadline}
          </p>
        </div>
        <div className="mt-16 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
          {data.steps.map((step, index) => (
            <ProcessStep 
              key={step._id}
              number={`${index + 1}`}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CampaignProcess;