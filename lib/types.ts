// lib/types.ts

import { Image } from 'sanity';

// Type for a single Service
export interface Service {
  _id: string;
  title: string;
  shortDescription: string;
  ctaText: string;
  // We'll handle modalContent later, for now it can be 'any'
  modalContent?: any; 
}

// Type for a single Creator
export interface Creator {
  _id: string;
  name: string;
  category: string;
  image: Image;
}

// Type for a single Process Step
export interface ProcessStep {
  _id:string;
  title: string;
  description: string;
}

// Type for a single "Why Us" Point
export interface WhyUsPoint {
  _id: string;
  title: string;
  description: string;
}

// The main type for all the content on the landing page
export interface PageData {
  title: string;
  heroHeadline: string;
  heroSubheadline: string;
  heroSupportiveLine: string;
  
  // Who We Are Section
  whoWeAreHeadline: string;
  whoWeAreSubheadline: string;
  whoWeAreTrustLine: string;

  // Services Section
  servicesSection: {
    headline: string;
    subheadline: string;
    services: Service[];
  };

  // Why Us Section
  whyUsSection: {
    headline: string;
    subheadline: string;
    points: WhyUsPoint[];
    trustStatement: string;
  };

  // Creator Pods Section
  creatorPodsSection: {
    headline: string;
    subheadline: string;
    creators: Creator[];
  };

  // Campaign Process Section
  campaignProcessSection: {
    headline: string;
    subheadline: string;
    steps: ProcessStep[];
  };
}