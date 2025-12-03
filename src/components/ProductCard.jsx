import React from "react";
import { FaStar } from "react-icons/fa";


export default function ProductCard({ img_src, title, price, rating, stock }) {
    return(
        <section className="w-[309px] h-[448px] flex flex-col justify-between">
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
                    <p className="line-through">{price * 1.7}</p>
                </div>
                <div className="flex gap-1 items-center ">
                    <FaStar className="text-[16px] text-[#FBBF24]" />
                    <p>{rating} ({stock})</p>
                </div>
            </div>
            {/* ******************************* Product details part end **************************** */}
        </section>
    )
}