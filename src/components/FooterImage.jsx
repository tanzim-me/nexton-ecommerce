import React from "react";
import { Link } from "react-router";
import footer_image from "../assets/images/footer-image.png";

export default function FooterImage() {
  return (
    <section className="container mt-[140px]">
      <div className="relative">
        <img src={footer_image} alt="footer image" className="w-full" />
        <div className="w-[362px] h-[122px] absolute top-[95px] left-30">
          <p className="font-poppins font-medium text-[20px] text-secondary mb-3.5">100% Original Products</p>
          <h2 className="font-poppins font-semibold text-[36px] text-theme mb-6">The All New Fashion Collection Items</h2>
          <p className="font-poppins font-medium text-[20px] text-secondary mb-6">Starting from: $59.99</p>
          <Link to="/explore" className="w-36 h-[52px] bg-theme rounded-[9999px] flex justify-center items-center font-poppins font-medium text-[18px] text-white hover:scale-105 transition duration-300">Shop now</Link>
        </div>
      </div>
    </section>
  );
}
