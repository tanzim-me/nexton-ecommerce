import React from "react";
import { FaStar } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

export default function ProductCard({
  img_src,
  title,
  price,
  rating,
  stock,
  category,
  id,
  onDetailsClick,
}) {
  return (
    <section className="w-[309px] h-[464px] pb-4 overflow-hidden flex flex-col justify-between relative group">
      {/* ------------------------- Hover effect ----------------------- */}
      <div>
        <button
          onClick={() => {
            onDetailsClick(id, category);
          }}
          to="/product"
          className="w-full h-full bg-[#1118274f] rounded-2xl absolute bottom-full group-hover:bottom-0 transition-all duration-300"
        ></button>
        <button className="w-15 h-15 p-2 rounded-full hover:bg-theme hover:cursor-pointer active:scale-110 flex justify-center items-center absolute -top-12 group-hover:top-8 right-6 transition-all duration-300 group/icon">
          <IoCartOutline className="text-3xl group-hover/icon:text-white duration-300" />
        </button>
      </div>
      {/* ******************************* Product image part start **************************** */}
      <div className="w-full h-[347px] bg-[#F8FAFC] flex justify-center items-center rounded-2xl">
        <img src={img_src} alt="product image" className="" />
      </div>
      {/* ******************************* Product image part end **************************** */}
      {/* ******************************* Product details part start **************************** */}
      <div className="w-full h-[81px] px-4">
        <div className="flex justify-between items-center font-poppins font-semibold text-[16px] text-theme mb-0.5">
          <h2 className="w-[196px] truncate">{title}</h2>
          <h2>{price}</h2>
        </div>
        <div className="flex justify-between items-center font-poppins font-regular text-[14px] text-secondary mb-[15px]">
          <p>Accessories</p>
          <p className="line-through">{(price * 1.7).toFixed(2)}</p>
        </div>
        <div className="flex gap-1 items-center ">
          <FaStar className="text-[16px] text-[#FBBF24]" />
          <p>
            {rating} ({stock})
          </p>
        </div>
      </div>
      {/* ******************************* Product details part end **************************** */}
    </section>
  );
}
