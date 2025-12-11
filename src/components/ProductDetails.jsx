import React from "react";
import { BsStars } from "react-icons/bs";

export default function ProductDetails() {
  return (
    <section>
      <h2 className="font-poppins font-semibold text-[36px] text-theme mb-4">
        Black Automatic Watch
      </h2>
      <p className="w-[735px] h-18 font-poppins font-normal text-[16px] text-secondary mb-15">
        The St. Louis Meramec Canoe Company was founded by Alfred Wickett in
        1922. Wickett had previously worked for the Old Town Canoe Co from 1900
        to 1914. Manufacturing of the classic wooden canoes in Valley Park,
        Missouri ceased in 1978.
      </p>
      <h2 className="font-poppins font-semibold text-[24px] text-theme mb-1">
        Fabric + Care
      </h2>
      <div className="font-poppins font-normal text-[16px] text-secondary mb-15">
        <p>Material: Soft wool blend</p>
        <p>Color: Various</p>
      </div>
      <h2 className="font-poppins font-semibold text-[24px] text-theme mb-1">
        Sale performance
      </h2>
      <div className="font-poppins font-normal text-[16px] text-secondary mb-15">
        <p>Sales: 0</p>
        <p>Review Count: -</p>
        <p>Review Average: -</p>
      </div>
      <h2 className="font-poppins font-semibold text-[24px] text-theme mb-2">
        Keywords
      </h2>
      <div className="font-poppins font-normal text-[12px] text-secondary flex gap-2 items-center">
        <button className="h-8 rounded-full border border-[#E5E7EB] px-3.5 flex gap-1 justify-center items-center">
          <BsStars />
          men's fashion
        </button>
        <button className="h-8 rounded-full border border-[#E5E7EB] px-3.5 flex gap-1 justify-center items-center">
          <BsStars />
          winter hat
        </button>
        <button className="h-8 rounded-full border border-[#E5E7EB] px-3.5 flex gap-1 justify-center items-center">
          <BsStars />
          colorful accessory
        </button>
        <button className="h-8 rounded-full border border-[#E5E7EB] px-3.5 flex gap-1 justify-center items-center">
          <BsStars />
          warm headwear
        </button>
      </div>
    </section>
  );
}
