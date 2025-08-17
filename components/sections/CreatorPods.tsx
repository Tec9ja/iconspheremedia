// components/sections/CreatorPods.tsx
"use client"; // No changes here, just keeping it for context

import React from 'react';
import Image from 'next/image'; // Import the Next.js Image component
import Button from '../Button';
import { PageData } from '@/lib/types';
import { urlFor } from '@/lib/sanity';
//... other imports

const CreatorCard = ({ name, category, imageUrl, imageAlt }: { name: string, category: string, imageUrl: string, imageAlt: string }) => (
  <div className="group relative overflow-hidden rounded-lg">
    {/* Use the Next.js Image component */}
    <Image 
      src={imageUrl} 
      alt={imageAlt} // Use dynamic alt text for accessibility
      width={400} 
      height={500}
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      // You can add a placeholder for a better loading experience
      placeholder="blur"
      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
    <div className="absolute bottom-0 left-0 p-6 text-white">
      <h3 className="text-2xl font-bold">{name}</h3>
      <p className="text-sm text-gray-300">{category}</p>
    </div>
  </div>
);

// Update the main component to pass the alt text
const CreatorPods = ({ data }: { data: PageData['creatorPodsSection'] }) => {
  // ... component logic
  return (
    <section id="talent" className="py-20 sm:py-32">
      {/* ... */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.creators.map((creator) => (
          <CreatorCard 
            key={creator._id}
            name={creator.name}
            category={creator.category}
            imageUrl={urlFor(creator.image).width(400).height(500).url()}
            imageAlt={`Professional photo of ${creator.name}`} // Pass alt text
          />
        ))}
      </div>
      {/* ... */}
    </section>
  );
};

export default CreatorPods;