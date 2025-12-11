import React from "react";
import { BsStars } from "react-icons/bs";

export default function ProductDetails({ title, description, warranty, policy, shipping, sales, rating, reviewCount, keywords }) {
  return (
    <section>
      <h2 className="font-poppins font-semibold text-[36px] text-theme mb-4">
        {title}
      </h2>
      <p className="w-[735px] h-18 font-poppins font-normal text-[16px] text-secondary mb-15">
        {description}
      </p>
      <h2 className="font-poppins font-semibold text-[24px] text-theme mb-1">
        Warranty + Policy
      </h2>
      <div className="font-poppins font-normal text-[16px] text-secondary mb-15">
        <p>Warranty: {warranty}</p>
        <p>Policy: {policy}</p>
        <p>Shipping: {shipping}</p>
      </div>
      <h2 className="font-poppins font-semibold text-[24px] text-theme mb-1">
        Sale performance
      </h2>
      <div className="font-poppins font-normal text-[16px] text-secondary mb-15">
        <p>Sales: {sales}</p>
        <p>Review Count: {reviewCount}</p>
        <p>Review Average: {rating}</p>
      </div>
      <h2 className="font-poppins font-semibold text-[24px] text-theme mb-2">
        Keywords
      </h2>
      <div className="font-poppins font-normal text-[12px] text-secondary flex gap-2 items-center">
        {
          keywords.map(keyword => (
        <button key={keyword} className="h-8 rounded-full border border-[#E5E7EB] px-3.5 flex gap-1 justify-center items-center">
          <BsStars />
          ${keyword}
        </button>

          ))
        }
      </div>
    </section>
  );
}
