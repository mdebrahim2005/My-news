import Image from 'next/image';
import logo from '@/assets/logo.png';
import { format } from "date-fns";

export default function Header() {
  const formattedDate = format(new Date(), "EEE, MMM d, yyyy");

  return (
    <div className="flex flex-col items-center justify-center py-4 px-4 text-center">
      <Image 
        src={logo} 
        alt="Logo" 
        width={320} 
        height={250} 
        className="w-auto h-auto max-w-[260px] sm:max-w-[320px]" 
        priority
      />
      <p className="text-base sm:text-xl font-bold text-gray-700 dark:text-gray-400 mt-2">
        Journalism Without Fear or Favour
      </p>
      <h3 
        suppressHydrationWarning
        className="text-sm sm:text-lg font-semibold text-black dark:text-black-300 mt-1"
      >
        {formattedDate}
      </h3>
    </div>
  );
}