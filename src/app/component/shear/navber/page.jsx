"use client";
import Link from "next/link";
import icons from "@/assets/user.png";
import Image from "next/image";
import NavLink from "../navlink/page";
import { useParams, useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

export default function Navbar() {
  const router = useRouter();
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const params = useParams();
  const id = params?.id || "";

  const handleLogout = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/login"); // লগআউটের পর লগইন পেজে নিয়ে যাবে
        },
      },
    });
  };

  return (
    <header className="container mx-auto px-4 py-6">
      <nav className="flex items-center justify-between">
        <div className="flex-1"></div>

        {/* মাঝের নেভিগেশন লিংক */}
        <div className="flex items-center gap-6 text-[#706F6F] font-normal text-base">
          <NavLink href="/" className="hover:text-black transition-colors">
            Home
          </NavLink>
          <NavLink href="/about" className="hover:text-black transition-colors">
            About
          </NavLink>
          <NavLink
            href={`/news/${id}`}
            className="hover:text-black transition-colors"
          >
            Career
          </NavLink>
        </div>

        {/* ইউজার থাকলে প্রোফাইল ও লগআউট বাটন, না থাকলে লগইন বাটন */}
        <div className="flex-1 flex justify-end items-center gap-3">
          {user ? (
            <>
              <h2 className="text-sm font-semibold text-gray-700">
                Hello, {user?.name || "Guest"}
              </h2>

              <div className="cursor-pointer">
                <Image
                  src={user?.image || icons}
                  alt="User Icon"
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full object-cover border border-gray-200"
                />
              </div>

              {/* Logout Button */}
              <button
                onClick={handleLogout}
                className="bg-[#403F3F] text-white px-6 py-2 font-semibold hover:bg-black transition-colors text-sm"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              {/* ডিফল্ট ইউজার আইকন */}
              <div className="cursor-pointer">
                <Image
                  src={icons}
                  alt="Default User Icon"
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full object-cover"
                />
              </div>

              {/* Login Button */}
              <NavLink
                href="/login"
                className="bg-[#403F3F] text-white px-8 py-2 font-semibold hover:bg-black transition-colors text-sm"
              >
                Login
              </NavLink>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}