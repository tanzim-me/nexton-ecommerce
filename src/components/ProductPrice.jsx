import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { IoBagCheckOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";

export default function ProductPrice({
  rating,
  reviewCount,
  price,
  discountPrice,
}) {
  const [selected, setSelected] = useState();
  const [quantity, setQuantity] = useState(1);

  function increaseQuantity() {
    setQuantity(quantity + 1);
  }

  function decreaseQuantity() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  return (
    <div className="w-[460px] h-[463px] rounded-2xl border border-[#E5E7EB] p-[33px]">
      <div className="flex justify-between mb-8">
        <div className="font-poppins text-[16px] text-secondary flex gap-2">
          <FaStar className="text-[16px] text-[#FBBF24]" />
          <p className="font-semibold">{rating}</p>
          <p className="font-medium underline">{reviewCount} reviews</p>
        </div>
        <div className="flex flex-col items-end">
          <h2 className="font-poppins font-semibold text-[24px] text-theme">
            ${price}
          </h2>
          <p className="font-poppins font-medium text-[14px] text-secondary line-through">
            ${discountPrice}
          </p>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="font-poppins font-semibold text-[16px] text-theme mb-3">
          Size: {selected}
        </h2>
        <div className="flex justify-between ">
          <button
            onClick={() => setSelected("S")}
            className={`w-[72px] h-11 rounded-xl border border-[#E5E7EB] flex justify-center items-center font-poppins font-semibold text-[16px] text-secondary hover:bg-theme hover:text-white transition duration-300 ${
              selected == "S" && "bg-[#0EA5E9] text-white"
            }`}
          >
            S
          </button>
          <button
            onClick={() => setSelected("M")}
            className={`w-[72px] h-11 rounded-xl border border-[#E5E7EB] flex justify-center items-center font-poppins font-semibold text-[16px] text-secondary hover:bg-theme hover:text-white transition duration-300 ${
              selected == "M" && "bg-[#0EA5E9] text-white"
            }`}
          >
            M
          </button>
          <button
            onClick={() => setSelected("L")}
            className={`w-[72px] h-11 rounded-xl border border-[#E5E7EB] flex justify-center items-center font-poppins font-semibold text-[16px] text-secondary hover:bg-theme hover:text-white transition duration-300 ${
              selected == "L" && "bg-[#0EA5E9] text-white"
            }`}
          >
            L
          </button>
          <button
            onClick={() => setSelected("XL")}
            className={`w-[72px] h-11 rounded-xl border border-[#E5E7EB] flex justify-center items-center font-poppins font-semibold text-[16px] text-secondary hover:bg-theme hover:text-white transition duration-300 ${
              selected == "XL" && "bg-[#0EA5E9] text-white"
            }`}
          >
            XL
          </button>
          <button
            onClick={() => setSelected("2XL")}
            className={`w-[72px] h-11 rounded-xl border border-[#E5E7EB] flex justify-center items-center font-poppins font-semibold text-[16px] text-secondary hover:bg-theme hover:text-white transition duration-300 ${
              selected == "2XL" && "bg-[#0EA5E9] text-white"
            }`}
          >
            2XL
          </button>
        </div>
      </div>
      <div className="flex justify-between items-center mb-8">
        <div className="w-[110px] h-10 bg-[#F8F8F8] rounded-full flex gap-4 justify-center items-center">
          <button
            onClick={decreaseQuantity}
            className="w-6 h-6 bg-white rounded-full text-[10px] text-theme flex justify-center items-center hover:bg-theme hover:text-white duration-300 active:scale-110"
          >
            <FaMinus />
          </button>
          <p>{quantity}</p>
          <button
            onClick={increaseQuantity}
            className="w-6 h-6 bg-white rounded-full text-[10px] text-theme flex justify-center items-center hover:bg-theme hover:text-white duration-300 active:scale-110"
          >
            <FaPlus />
          </button>
        </div>
        <button className="w-[178px] h-[52px] border border-[#E5E7EB] rounded-full font-poppins font-medium text-[16px] text-theme flex gap-2 justify-center items-center hover:bg-theme hover:text-white duration-300">
          <IoBagCheckOutline className="text-[#F8FAFC]" />
          Add to cart
        </button>
      </div>
      <div className="font-poppins font-normal text-[16px] text-secondary flex justify-between items-center mb-2.5">
        <p>${`${price} x ${quantity}`}</p>
        <p>${price * quantity}</p>
      </div>
      <div className="font-poppins font-normal text-[16px] text-secondary flex justify-between items-center mb-4">
        <p>Tax estimate</p>
        <p>$0</p>
      </div>
      <hr className="text-[#E5E7EB] mb-4" />
      <div className="font-poppins font-semibold text-[16px] text-theme flex justify-between items-center">
        <p>Total</p>
        <p>${price * quantity}</p>
      </div>
    </div>
  );
}
