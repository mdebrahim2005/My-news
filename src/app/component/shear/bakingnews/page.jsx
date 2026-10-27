"use client";
import Marquee from "react-fast-marquee";

export default function Bakingnews() {
  return (
    <div className="flex items-center gap-4 bg-gray-200 py-3 container mx-auto px-4">
      <button className="btn btn-error text-white font-semibold shrink-0">
        Latest News
      </button>
      <div className="flex-1 overflow-hidden">
        <Marquee pauseOnHover ={true} speed={100} gradient={false}>
          <p className="font-medium text-gray-800">
            Breaking News: New Baking Techniques Revolutionize the Industry!
          </p>
        </Marquee>
      </div>
    </div>
  );
}