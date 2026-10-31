import React from "react";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import { getnewsbyid } from "@/lib/api";
import RightSidebar from "@/app/component/Homepage/All/rightsidber";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const newsResponse = await getnewsbyid(id);
  const news = Array.isArray(newsResponse) ? newsResponse[0] : newsResponse;

  return {
    title: news?.title || "Dragon News Details",
    description: news?.details?.slice(0, 160) || "News details page",
  };
}

export default async function Details({ params }) {
  const { id } = await params;

  // News data fetch kora hocche
  const newsResponse = await getnewsbyid(id);
  const singleNews = Array.isArray(newsResponse) ? newsResponse[0] : newsResponse;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        
        {/* Main Content Area */}
        <div className="md:col-span-9">
          <h2 className="text-xl font-bold text-[#403F3F] mb-5">Dragon News</h2>

          {/* Jodi news paowa jay tobe details dekhabe, ar na paowa gele fallback message dekhabe */}
          {singleNews ? (
            <div className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm">
              {singleNews.image_url && (
                <div className="w-full mb-6 rounded-md overflow-hidden bg-gray-50 flex items-center justify-center">
                  <img
                    src={singleNews.image_url}
                    alt={singleNews.title || "News Image"}
                    className="w-full max-h-[400px] object-cover rounded-md"
                  />
                </div>
              )}

              <h1 className="text-2xl font-bold text-[#403F3F] leading-snug mb-4">
                {singleNews.title}
              </h1>

              <p className="text-base text-[#706F6F] leading-relaxed mb-8 whitespace-pre-line">
                {singleNews.details}
              </p>

              <Link
                href={`/catagory/${singleNews.category_id || "0"}`}
                className="inline-flex items-center gap-2 bg-[#D72050] hover:bg-[#b81842] text-white text-sm font-semibold px-6 py-3 rounded-none transition-colors"
              >
                <FaArrowLeft className="w-3.5 h-3.5" />
                <span>All news in this category</span>
              </Link>
            </div>
          ) : (
            /* Jodi kono news select kora na hoy ba news na thake */
            <div className="border border-gray-200 rounded-lg p-10 bg-white text-center shadow-sm">
              <h3 className="text-xl font-bold text-[#403F3F] mb-2">
                No News Selected
              </h3>
              <p className="text-gray-500 mb-6 text-sm">
                Please select a news article from the homepage or categories to view its full details.
              </p>
              <Link
                href="/"
                className="inline-flex items-center gap-2 bg-[#D72050] hover:bg-[#b81842] text-white text-sm font-semibold px-6 py-3 transition-colors"
              >
                <FaArrowLeft className="w-3.5 h-3.5" />
                <span>Back to Home</span>
              </Link>
            </div>
          )}
        </div>

        {/* Right Sidebar */}
        <div className="md:col-span-3">
          <RightSidebar />
        </div>

      </div>
    </div>
  );
}