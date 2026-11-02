"use client";
import { useState } from "react";
import icons from "@/assets/user.png";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter, usePathname } from "next/navigation";
import { authClient } from "@/lib/auth-client";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const params = useParams();
  const id = params?.id || "";

  const handleLogout = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/login");
        },
      },
    });
  };

  // Active check korar logic
  const isActive = (path) => {
    if (path === "/" || path === "/home") {
      return pathname === "/" || pathname === "/home" || pathname.startsWith("/catagory") || pathname.startsWith("/category");
    }
    return pathname === path || pathname.startsWith(path);
  };

  const getLinkClasses = (path) => {
    return isActive(path)
      ? "text-pink-400 font-semibold border-b-2 border-pink-500 pb-1 transition-all duration-200"
      : "text-[#706F6F] hover:text-black transition-colors pb-1";
  };

  return (
    <header className="container mx-auto px-4 py-4 md:py-6">
      <nav className="flex items-center justify-between relative">
        
        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="text-gray-700 hover:text-black focus:outline-none p-1.5 rounded-md hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Desktop Balance Spacer */}
        <div className="hidden md:block md:flex-1"></div>

        {/* Desktop Navigation Links (With Active Color & Underline) */}
        <div className="hidden md:flex items-center gap-8 text-base font-medium">
          <Link href="/" className={getLinkClasses("/")}>
            Home
          </Link>
          <Link href="/about" className={getLinkClasses("/about")}>
            About
          </Link>
          <Link
            href={id ? `/news/${id}` : "/news"}
            className={getLinkClasses("/news")}
          >
            Career
          </Link>
        </div>

        {/* Right User/Auth Section */}
        <div className="flex items-center justify-end gap-2 sm:gap-3 md:flex-1">
          {user ? (
            <>
              <h2 className="hidden sm:inline-block text-xs sm:text-sm font-semibold text-gray-700 truncate max-w-[120px]">
                Hello, {user?.name || "Guest"}
              </h2>

              <div className="cursor-pointer flex-shrink-0">
                <Image
                  src={user?.image || icons}
                  alt="User Icon"
                  width={36}
                  height={36}
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover border border-gray-200"
                />
              </div>

              <button
                onClick={handleLogout}
                className="bg-[#403F3F] text-white px-3 sm:px-5 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold hover:bg-black transition-colors rounded-sm"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <div className="cursor-pointer flex-shrink-0">
                <Image
                  src={icons}
                  alt="Default User Icon"
                  width={36}
                  height={36}
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover"
                />
              </div>

              <Link
                href="/login"
                className="bg-[#403F3F] text-white px-4 sm:px-6 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold hover:bg-black transition-colors rounded-sm inline-block text-center"
              >
                Login
              </Link>
            </>
          )}
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden mt-3 pt-3 border-t border-gray-100 flex flex-col items-center gap-4 text-center bg-white shadow-md rounded-lg py-4 text-sm font-medium">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className={getLinkClasses("/")}
          >
            Home
          </Link>
          <Link
            href="/about"
            onClick={() => setIsOpen(false)}
            className={getLinkClasses("/about")}
          >
            About
          </Link>
          <Link
            href={id ? `/news/${id}` : "/news"}
            onClick={() => setIsOpen(false)}
            className={getLinkClasses("/news")}
          >
            Career
          </Link>
        </div>
      )}
    </header>
  );
}