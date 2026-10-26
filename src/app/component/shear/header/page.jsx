import Image from 'next/image';
import logo from '@/assets/logo.png';

export default function Header() {
  return (
    <div className="flex flex-col items-center justify-center py-4">
      <Image src={logo} alt="Logo" width={320} height={250} />
      <p className="text-2xl font-bold text-gray-600 dark:text-gray-300"> Journalism Without Fear or Favour</p>
       <h3 className="text-lg font-semibold text-gray-500 dark:text-gray-340">Sunday, November 27, 2022</h3>
      
    </div>
  )
}
