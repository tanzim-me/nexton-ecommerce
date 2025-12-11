import React from "react";

export default function ProductImage() {
  return (
      <div className="w-[804px] h-[678px] flex gap-6 justify-between">
        <div className="flex flex-col gap-4">
          <div className="w-[140px] h-[158px] bg-amber-400 rounded-2xl"></div>
          <div className="w-[140px] h-[158px] bg-amber-400 rounded-2xl"></div>
          <div className="w-[140px] h-[158px] bg-amber-400 rounded-2xl"></div>
          <div className="w-[140px] h-[158px] bg-amber-400 rounded-2xl"></div>
        </div>
        <div className="w-[640px] h-[678px] bg-green-300 rounded-2xl">
          <img src="" alt="" />
        </div>
      </div>
  );
}
