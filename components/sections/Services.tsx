// components/sections/Services.tsx
"use client";

import React, { useState } from 'react';
import { PageData, Service } from '@/lib/types';
import dynamic from 'next/dynamic';

const ServiceModal = dynamic(() => import('../ServiceModal'));

// DEFINE ServiceCard HERE, outside the main component
const ServiceCard = ({ service, onClick }: { service: Service, onClick: () => void }) => (
  <div className="fade-in bg-gray-900/50 p-8 rounded-lg border border-gray-800 flex flex-col">
    <h3 className="text-2xl font-bold text-white">{service.title}</h3>
    <p className="mt-4 text-gray-400 flex-grow">{service.shortDescription}</p>
    <button onClick={onClick} className="mt-6 text-blue-400 font-semibold hover:text-blue-300 transition-colors text-left">
      {service.ctaText} &rarr;
    </button>
  </div>
);

interface ServicesProps {
  data: PageData['servicesSection'];
}

const Services = ({ data }: ServicesProps) => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  // The useGSAP hook and animations will be re-added in the next phase correctly
  // For now, we remove the unused imports to pass the linter

  return (
    <>
      <section id="services" className="py-20 sm:py-32">
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
            {data.services.map((service) => (
              <ServiceCard 
                key={service._id}
                service={service}
                onClick={() => setSelectedService(service)}
              />
            ))}
          </div>
        </div>
      </section>
      {selectedService && <ServiceModal service={selectedService} onClose={() => setSelectedService(null)} />}
    </>
  );
};

export default Services;