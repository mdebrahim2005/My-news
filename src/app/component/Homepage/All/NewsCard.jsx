
import Link from "next/link";
import { FaBookmark, FaShareAlt, FaEye, FaStar } from "react-icons/fa";


export default function NewsCard({ item }) {
  const { _id, title, author, image_url, details, rating, total_view } = item || {};

  return (
    <div className="card bg-base-100 border border-gray-200 rounded-lg overflow-hidden shadow-sm mb-6">
      {/* Top Bar: Author Info & Actions */}
      <div className="flex justify-between items-center bg-[#F3F3F3] p-4">
        <div className="flex items-center gap-3">
          <img
            src={author?.img || "https://placehold.co/40x40"}
            alt={author?.name || "Author"}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h4 className="font-semibold text-sm text-[#403F3F] leading-tight">
              {author?.name || "Anonymous"}
            </h4>
            <p className="text-xs text-[#706F6F] mt-0.5">
              {author?.published_date?.split(" ")[0] || "Unknown date"}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 text-gray-500">
          <button className="hover:text-black transition">
            <FaBookmark className="w-4 h-4 cursor-pointer" />
          </button>
          <button className="hover:text-black transition">
            <FaShareAlt className="w-4 h-4 cursor-pointer" />
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-5">
        {/* Title */}
        <h3 className="text-lg font-bold text-[#403F3F] mb-4 leading-snug">
          {title}
        </h3>

        {/* Thumbnail Image */}
        <div className="w-full mb-4 rounded-md overflow-hidden bg-gray-100 max-h-64 flex items-center justify-center">
          <img
            src={image_url}
            alt={title}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Details / Summary */}
        <div className="text-sm text-[#706F6F] leading-relaxed">
          {details?.length > 220 ? (
            <p>
              {details.slice(0, 220)}...{" "}
              <Link
                href={`/news/${_id}`}
                className="text-[#FF8C47] font-semibold hover:underline block mt-2"
              >
                Read More
              </Link>
            </p>
          ) : (
            <p>{details}</p>
          )}
        </div>

        <hr className="my-4 border-gray-200" />

        {/* Bottom Bar: Rating & Views */}
        <div className="flex justify-between items-center text-sm text-[#706F6F]">
          <div className="flex items-center gap-2">
            <div className="flex text-[#FF8C47] gap-0.5">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="w-3.5 h-3.5 fill-current" />
              ))}
            </div>
            <span className="font-semibold text-[#403F3F] ml-1">
              {rating?.number || 0}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <FaEye className="w-4 h-4" />
            <span>{total_view || 0}</span>
          </div>
        </div>
      </div>
    </div>
  );
}