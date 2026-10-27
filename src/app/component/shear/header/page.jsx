'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import logo from '@/assets/logo.png';
import { format } from "date-fns";

export default function Header() {
  const [formattedDate, setFormattedDate] = useState('');

  useEffect(() => {
    setFormattedDate(format(new Date(), "EEE, MMM d, yyyy"));
  }, []);

  return (
    <div className="flex flex-col items-center justify-center py-4">
      <Image 
        src={logo} 
        alt="Logo" 
        width={320} 
        height={250} 
        className="w-auto h-auto"
        priority
      />
      <p className="text-xl font-bold text-gray-700 dark:text-gray-400">
        Journalism Without Fear or Favour
      </p>
      <h3 className="text-lg font-semibold text-black dark:text-black-300">
        {formattedDate}
      </h3>
    </div>
  );
}