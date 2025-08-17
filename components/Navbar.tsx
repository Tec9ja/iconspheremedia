// components/Navbar.tsx

import React from 'react';
import Link from 'next/link';
import Button from './Button';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-black/50 backdrop-blur-lg border-b border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-white">
              IconSphere<span className="text-blue-400">.</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:items-center md:space-x-8">
            <Link href="#talent" className="text-gray-300 hover:text-white transition-colors">Talent</Link>
            <Link href="#campaigns" className="text-gray-300 hover:text-white transition-colors">Campaigns</Link>
            <Link href="#about" className="text-gray-300 hover:text-white transition-colors">About</Link>
          </nav>

          {/* Contact Button */}
          <div className="hidden md:block">
            <Button href="#contact">Contact</Button>
          </div>
          
          {/* Mobile Menu Button (functionality to be added later) */}
          <div className="md:hidden">
            <button className="text-gray-300 hover:text-white focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;