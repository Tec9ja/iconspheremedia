// components/ServiceModal.tsx
"use client";

import { Service } from "@/lib/types";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
// import { PortableText } from '@portabletext/react' // Comment this out for now

// ... rest of the file

interface ServiceModalProps {
  service: Service | null;
  onClose: () => void;
}

const ServiceModal = ({ service, onClose }: ServiceModalProps) => {
  const modalRef = useRef(null);

  useGSAP(() => {
    if (service) {
      gsap.to(modalRef.current, { autoAlpha: 1, duration: 0.4 });
      gsap.fromTo(".modal-content", { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, delay: 0.2 });
    } else {
      gsap.to(modalRef.current, { autoAlpha: 0, duration: 0.3 });
    }
  }, [service]);

  if (!service) return null;

  return (
    <div
      ref={modalRef}
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 invisible"
      onClick={onClose}
    >
      <div
        className="modal-content bg-gray-900 border border-gray-800 rounded-lg p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-bold text-white">{service.title}</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white">&times;</button>
        </div>
        <div className="prose prose-invert mt-6">
          {/* This is where the rich text from Sanity will be rendered */}
          {/* <PortableText value={service.modalContent} /> */}
          <p>{service.shortDescription}</p>
          <p>More detailed content will be rendered here from the CMS using PortableText.</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceModal;