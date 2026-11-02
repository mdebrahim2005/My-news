"use client";
import Image from "next/image";
import { FaGoogle, FaGithub, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import swimming from "@/assets/swimming.png";
import classImg from "@/assets/class.png";
import playgroundImg from "@/assets/playground.png";
import bgBanner from "@/assets/bg.png";
import { authClient } from "@/lib/auth-client";

export default function RightSidebar() {
  const handleGoogleLogin = async () => {
       const data = await authClient.signIn.social({
    provider: "google",
    callbackURL: "/",

  });
  console.log("Google login data:", data);
} 

 const handleGithubLogin = async () => {
  const data = await authClient.signIn.social({
    provider: "github",
    callbackURL: "/",
  });
  console.log("Github login data:", data);
};

  return (
    <aside className="w-full space-y-8">
      {/* 1. Login With Section */}
      <div>
        <h2 className="text-lg font-bold text-gray-800 mb-4">Login With</h2>
        <div className="flex flex-col gap-2.5">
          <button className="btn btn-outline border-blue-500 text-blue-500
           hover:bg-blue-500 hover:border-blue-500
            hover:text-white normal-case font-medium flex items-center justify-center gap-2
             rounded-md h-10 min-h-0" onClick={handleGoogleLogin}>
            <FaGoogle /> Login With Google
          </button>
          <button className="btn btn-outline border-gray-800 text-gray-800
           hover:bg-gray-800 hover:border-gray-800 hover:text-white normal-case font-medium 
           flex items-center justify-center gap-2 rounded-md h-10 min-h-0" onClick={handleGithubLogin}>
            <FaGithub /> Login With Github
          </button>
        </div>
      </div>

      {/* 2. Find Us On Section */}
      <div>
        <h2 className="text-lg font-bold text-gray-800 mb-4">Find Us On</h2>
        <div className="border border-gray-200 rounded-md divide-y divide-gray-200">
          <a
            href="#"
            className="flex items-center gap-3 p-3.5 hover:bg-gray-50 transition-colors text-gray-600 font-medium text-sm"
          >
            <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-blue-600">
              <FaFacebookF />
            </span>
            Facebook
          </a>
          <a
            href="#"
            className="flex items-center gap-3 p-3.5 hover:bg-gray-50 transition-colors text-gray-600 font-medium text-sm"
          >
            <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-sky-400">
              <FaTwitter />
            </span>
            Twitter
          </a>
          <a
            href="#"
            className="flex items-center gap-3 p-3.5 hover:bg-gray-50 transition-colors text-gray-600 font-medium text-sm"
          >
            <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-pink-500">
              <FaInstagram />
            </span>
            Instagram
          </a>
        </div>
      </div>

      {/* 3. Q-Zone Section */}
     <div className="bg-gray-100 p-4 rounded-md">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Q-Zone</h2>
        <div className="space-y-4">
          <div className="bg-white p-2 rounded-md border border-gray-200 flex flex-col items-center">
            <Image
              src={swimming}
              alt="Swimming"
              className="w-full h-auto object-cover rounded"
            />
            {/* <span className="font-semibold text-gray-700 mt-2 text-sm">Swimming</span> */}
          </div>

          <div className="bg-white p-2 rounded-md border border-gray-200 flex flex-col items-center">
            <Image
              src={classImg}
              alt="Class"
              className="w-full h-auto object-cover rounded"
            />
            {/* <span className="font-semibold text-gray-700 mt-2 text-sm">Class</span> */}
          </div>

          <div className="bg-white p-2 rounded-md border border-gray-200 flex flex-col items-center">
            <Image
              src={playgroundImg}
              alt="Playground"
              className="w-full h-auto object-cover rounded"
            />
            {/* <span className="font-semibold text-gray-700 mt-2 text-sm">Playground</span> */}
          </div>
        </div>
      </div>

      {/* 4. Advertisement Banner (bg.png) */}
      <div className="relative w-full rounded-md overflow-hidden text-center text-white py-14 px-6 flex flex-col items-center justify-center">
        <Image
          src={bgBanner}
          alt="Ad Banner"
          fill
          className="object-cover -z-10"
        />
        <h3 className="text-2xl font-bold mb-3 leading-snug">
          Create an <br /> Amazing <br /> Newspaper
        </h3>
        </div>
   
    </aside>
  );
}
