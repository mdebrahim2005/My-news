"use client";
import Link from 'next/link'
import { usePathname } from 'next/navigation';


export default function NavLink({children, href}) {
    const pathname = usePathname();
    console.log(pathname);
    const isActive = pathname === href;
  return (
    <Link href={href} className={isActive ? 'text-black border-b-2 border-purple-500' : 'text-[#706F6F]  hover:text-black'}>
      {children}
    </Link>
  )
}
