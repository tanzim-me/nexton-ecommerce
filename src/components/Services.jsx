import React from "react";
import { BsTruck } from "react-icons/bs";

export default function Services() {
  return (
    <section className="mt-[52px] mb-8">
      <div className="container h-[98px] border border-[#E5E7EB] rounded-2xl px-10 py-6 flex justify-between items-center">
        <div className="w-[303px] h-[50px] flex justify-start items-center gap-4 border-r-2 border-[#E5E7EB]">
          <BsTruck className="text-[24px] text-theme"/>
          <div>
            <h2 className="font-poppins font-semibold text-[18px] text-theme">Free shipping</h2>
            <p className="font-poppins font-normal text-[14px] text-[#4B5563]">On orders over $50.00</p>
          </div>
        </div>
        <div className="w-[303px] h-[50px] flex justify-start items-center gap-4 border-r-2 border-[#E5E7EB]">
          <BsTruck className="text-[24px] text-theme"/>
          <div>
            <h2 className="font-poppins font-semibold text-[18px] text-theme">Very easy to return</h2>
            <p className="font-poppins font-normal text-[14px] text-[#4B5563]">Just phone number</p>
          </div>
        </div>
        <div className="w-[303px] h-[50px] flex justify-start items-center gap-4 border-r-2 border-[#E5E7EB]">
          <BsTruck className="text-[24px] text-theme"/>
          <div>
            <h2 className="font-poppins font-semibold text-[18px] text-theme">Worldwide delivery</h2>
            <p className="font-poppins font-normal text-[14px] text-[#4B5563]">Fast delivery worldwide</p>
          </div>
        </div>
        <div className="w-[303px] h-[50px] flex justify-start items-center gap-4">
          <BsTruck className="text-[24px] text-theme"/>
          <div>
            <h2 className="font-poppins font-semibold text-[18px] text-theme">Refunds policy</h2>
            <p className="font-poppins font-normal text-[14px] text-[#4B5563]">60 days return for any reason</p>
          </div>
        </div>
        
      </div>
    </section>
  );
}
