// components/ContactForm.tsx
"use client";

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
// import Button from './Button';

type FormData = {
  name: string;
  email: string;
  type: 'Brand' | 'Creator';
  message: string;
};

const ContactForm = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (data: FormData) => {
    setError(null);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Something went wrong');
      }
      
      setIsSubmitted(true);
    } catch {
      setError('Failed to send message. Please try again later.');
    }
  };

   if (isSubmitted) {
    return (
      <div className="text-center p-8">
        <h3 className="text-2xl font-bold text-white">Thank you!</h3>
        <p className="text-gray-300 mt-2">Your message has been sent. We&apos;ll get back to you shortly.</p>
      </div>
    );
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-300">Full Name</label>
        <input 
          type="text" 
          id="name"
          {...register('name', { required: 'Name is required' })}
          className="mt-1 block w-full bg-gray-800 border-gray-700 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-white p-3"
        />
        {errors.name && <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>}
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
        <input 
          type="email" 
          id="email"
          {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' } })}
          className="mt-1 block w-full bg-gray-800 border-gray-700 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-white p-3"
        />
        {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
        <textarea 
          id="message"
          rows={4}
          {...register('message', { required: 'Message is required' })}
          className="mt-1 block w-full bg-gray-800 border-gray-700 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-white p-3"
        />
        {errors.message && <p className="mt-1 text-sm text-red-400">{errors.message.message}</p>}
      </div>

      {error && <p className="text-red-400 text-center">{error}</p>}
      
      <div>
        <button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full bg-blue-500 text-white py-3 px-6 rounded-md font-semibold hover:bg-blue-600 transition-colors disabled:bg-gray-600"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;