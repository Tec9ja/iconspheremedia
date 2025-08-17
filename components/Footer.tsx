// components/Footer.tsx

import React from 'react';
import Link from 'next/link';

const Footer = () => {
  // A simple SVG icon component for social links
  const SocialIcon = ({ href, children }: { href: string, children: React.ReactNode }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
      {children}
    </a>
  );

  return (
    <footer className="bg-gray-900/50 border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: Brand & Mission */}
          <div className="md:col-span-1">
            <h2 className="text-2xl font-bold text-white">IconSphere<span className="text-blue-400">.</span></h2>
            <p className="mt-4 text-gray-400 text-sm">
              IconSphere Media is a premium digital branding agency dedicated to crafting powerful visual identities and digital experiences.
            </p>
            <div className="mt-6 flex space-x-4">
              <SocialIcon href="#">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
              </SocialIcon>
              {/* Add other social icons here */}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="#" className="text-base text-gray-300 hover:text-white">Home</Link></li>
              <li><Link href="#talent" className="text-base text-gray-300 hover:text-white">Talent</Link></li>
              <li><Link href="#campaigns" className="text-base text-gray-300 hover:text-white">Campaigns</Link></li>
              <li><Link href="#about" className="text-base text-gray-300 hover:text-white">About Us</Link></li>
            </ul>
          </div>

          {/* Column 3: Our Expertise */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Our Expertise</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="#" className="text-base text-gray-300 hover:text-white">Talent Management</Link></li>
              <li><Link href="#" className="text-base text-gray-300 hover:text-white">Influencer Marketing</Link></li>
              <li><Link href="#" className="text-base text-gray-300 hover:text-white">Brand Partnership</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Connect With Us</h3>
            <ul className="mt-4 space-y-2 text-base text-gray-300">
              <li>123 Influence Plaza, Digital Hub, CA 90210</li>
              <li>+1 (555) 123-4567</li>
              <li>hello@iconsphere.media</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-800 pt-8 text-sm text-gray-400 text-center">
          <p>&copy; {new Date().getFullYear()} IconSphere Media. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;