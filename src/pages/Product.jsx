import React from "react";
import ProductImage from "../components/ProductImage";
import ProductPrice from "../components/ProductPrice";
import ProductDetails from "../components/ProductDetails";
import ProductSlider from "../components/ProductSlider";

export default function Product() {
  return (
    <main className="container">
      <div className="flex gap-8 justify-between mt-10">
        <ProductImage />
        <ProductPrice />
      </div>
      <hr className="w-[804px] text-[#E5E7EB] my-13" />
      <ProductDetails />
      <h2 className="font-poppins font-semibold text-[36px] text-theme mt-24 mb-10">Recommended products</h2>
      <ProductSlider />
    </main>
  );
}
