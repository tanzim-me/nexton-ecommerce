import React from "react";
import { Link } from "react-router";
import SingleCartItem from "./SingleCartItem";

export default function Cart({ isOpen, closeCart }) {
  return (
    <>
      {/* ******************************* Cart part start **************************** */}
      <div
        className={`w-full h-screen flex justify-between fixed top-0 right-0 transition-transform duration-500
          ${isOpen ? "translate-x-0" : "translate-x-full"} z-10`}
      >
        {/* ---------------------------- Shadowy part start --------------------------- */}

        <div
          onClick={closeCart}
          className="w-full h-screen bg-[#11182770]"
        ></div>

        {/* ---------------------------- Shadowy part end --------------------------- */}
        {/* ---------------------------- Cart items part start --------------------------- */}

        <div className="w-[400px] h-screen bg-white px-5 py-5">
          <div className="w-full h-[700px] flex flex-col gap-5 overflow-y-auto mb-[115px]">
            <SingleCartItem />
          </div>

          {/* ---------------------------- Total part start --------------------------- */}

          <div className="flex justify-between items-center mb-4">
            <h2>Total Price:</h2>
            <h2 className="font-poppins font-bold text-2xl">$100</h2>
          </div>

          {/* ---------------------------- Total price part end --------------------------- */}
          {/* ---------------------------- Checkout link part start --------------------------- */}

          <Link
            onClick={closeCart}
            to="/checkout"
            className="w-[350px] h-[50px] bg-theme font-poppins font-medium text-white text-xl hover:scale-105 transition duration-300 flex justify-center items-center rounded-[50px]"
          >
            Checkout
          </Link>

          {/* ---------------------------- checkout link part end --------------------------- */}
        </div>
        {/* ---------------------------- Cart items part end --------------------------- */}
      </div>
      {/* ******************************* Banner Slider part end **************************** */}
    </>
  );
}
