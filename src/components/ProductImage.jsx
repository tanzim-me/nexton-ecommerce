import React from "react";

export default function ProductImage({ imgSrc, loading }) {
  return (
    <div className="w-[804px] h-[678px] flex gap-6 justify-between">
      {/* Thumbnails */}
      <div className="flex flex-col gap-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className={`w-[140px] h-[158px] rounded-2xl overflow-hidden
              ${loading ? "bg-gray-200 animate-pulse" : "bg-[#F8FAFC]"}`}
          >
            {!loading && (
              <img
                src={imgSrc}
                alt={`product image ${i + 1}`}
                className="w-full h-full object-contain"
              />
            )}
          </div>
        ))}
      </div>

      {/* Main image */}
      <div
        className={`w-[640px] h-[678px] rounded-2xl flex justify-center items-center
          ${loading ? "bg-gray-200 animate-pulse" : "bg-[#F8FAFC]"}`}
      >
        {!loading && (
          <img
            src={imgSrc}
            alt="main image"
            className="w-full h-full object-contain"
          />
        )}
      </div>
    </div>
  );
}
