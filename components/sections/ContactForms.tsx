// components/sections/ContactForms.tsx

import React from 'react';
import ContactForm from '../ContactForm';

const ContactForms = () => {
  return (
    <section id="contact" className="py-20 sm:py-32 gradient-glow">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto bg-gray-900/50 border border-gray-800 rounded-lg p-8 md:p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Get in Touch</h2>
            <p className="mt-4 text-lg text-gray-300">Whether you're a brand or a creator, we'd love to hear from you.</p>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactForms;