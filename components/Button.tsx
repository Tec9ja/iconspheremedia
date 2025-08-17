// components/Button.tsx

import Link from 'next/link';
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary';
  className?: string;
}

const Button = ({ children, href = '#', variant = 'primary', className = '' }: ButtonProps) => {
  const baseStyles = "inline-block px-6 py-3 rounded-md font-semibold text-center transition-all duration-300";
  
  const styles = {
    primary: "bg-blue-500 text-white hover:bg-blue-600 shadow-lg shadow-blue-500/20",
    secondary: "bg-transparent border-2 border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white",
  };

  return (
    <Link href={href} className={`${baseStyles} ${styles[variant]} ${className}`}>
      {children}
    </Link>
  );
};

export default Button;