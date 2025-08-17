// components/sections/Services.tsx
"use client";

import React, { useRef, useState } from 'react';
import { PageData, Service } from '@/lib/types';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import dynamic from 'next/dynamic'; // Import dynamic

// Dynamically import the modal component
const ServiceModal = dynamic(() => import('../ServiceModal'));

// ... ServiceCard component remains the same

const Services = ({ data }: { data: PageData['servicesSection'] }) => {
  const container = useRef(null);
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  // ... useGSAP hook remains the same

  return (
    <>
      <section ref={container} id="services" className="py-20 sm:py-32">
        {/* ... section content */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.services.map((service) => (
            <ServiceCard 
              key={service._id}
              service={service}
              onClick={() => setSelectedService(service)}
            />
          ))}
        </div>
      </section>
      {/* The modal will only be rendered and its code loaded when selectedService is not null */}
      {selectedService && <ServiceModal service={selectedService} onClose={() => setSelectedService(null)} />}
    </>
  );
};

export default Services;