"use client";
import Link from "next/link";
import icons from "@/assets/user.png";
import Image from "next/image";
import NavLink from "../navlink/page";

export default function Navbar() {
  return (
    <header className="container mx-auto px-4 py-6">
      <nav className="flex items-center justify-between">
        {/* ১. বাম পাশের ফাঁকা স্পেস (মাঝের মেনু ঠিক সেন্টারে রাখার জন্য) */}
        <div className="flex-1"></div>

        {/* ২. মাঝের নেভিগেশন লিংক */}
        <div className="flex items-center gap-6 text-[#706F6F] font-normal text-base">
          <NavLink href="/" className="hover:text-black transition-colors">
            Home
          </NavLink>
          <NavLink href="/about" className="hover:text-black transition-colors">
            About
          </NavLink>
          <NavLink href="/career" className="hover:text-black transition-colors">
            Career
          </NavLink>
        </div>

        {/* ৩. ডান পাশের ইউজার আইকন ও লগইন বাটন */}
        <div className="flex-1 flex justify-end items-center gap-3">
          {/* ইউজার প্রোফাইল আইকন */}
          <div className="text-3xl text-gray-700 cursor-pointer">
                
                <Image 
               src={icons} 
                alt="User Icon" 
               className="w-8 h-8 rounded-full" />
            
          </div>

          {/* লগইন বাটন */}
          <NavLink href="/login" className="bg-[#403F3F] text-white px-8 py-2 rounded-none font-semibold hover:bg-black transition-colors">
            Login
          </NavLink>
        </div>
      </nav>
    </header>
  );
}