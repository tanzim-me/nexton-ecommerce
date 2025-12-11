import React from "react";

export default function ProductImage({ imgSrc }) {
  return (
      <div className="w-[804px] h-[678px] flex gap-6 justify-between">
        <div className="flex flex-col gap-4">
          <div className="w-[140px] h-[158px] bg-[#F8FAFC] rounded-2xl">
            <img src={imgSrc} alt="product image 1" />
          </div>
          <div className="w-[140px] h-[158px] bg-[#F8FAFC] rounded-2xl">
            <img src={imgSrc} alt="product image 2" />
          </div>
          <div className="w-[140px] h-[158px] bg-[#F8FAFC] rounded-2xl">
            <img src={imgSrc} alt="product image 3" />
          </div>
          <div className="w-[140px] h-[158px] bg-[#F8FAFC] rounded-2xl">
            <img src={imgSrc} alt="product image 4" />
          </div>
        </div>
        <div className="w-[640px] h-[678px] bg-[#F8FAFC] rounded-2xl flex justify-center items-center">
          <img src={imgSrc} alt="main image" />
        </div>
      </div>
  );
}
