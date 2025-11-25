import React from "react";
import { useState } from "react";
import logo from "../assets/images/logo.png";
import { CiSearch } from "react-icons/ci";
import { RiUser3Line } from "react-icons/ri";
import { Link } from "react-router";
import { IoCartOutline } from "react-icons/io5";
import Cart from "./Cart";

const Navbar = () => {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <nav>
      {/* *********************************** Navbar row part start ******************************** */}
      <div id="menu_row">
        <div className="container w-full h-[100px] flex justify-between items-center">
          {/* ------------------------------ Site logo ------------------------------ */}
          <Link to={"/"} id="logo">
            <img src={logo} alt="logo image" className="w-[119px] h-[46px]" />
          </Link>

          {/* ------------------------------ Search bar ------------------------------ */}
          <div
            id="search_bar"
            className="w-[400px] h-[52px] flex gap-2.5 items-center bg-[#F8F8F8] rounded-[100px] px-6"
          >
            <CiSearch className="text-[#4B5563]" />
            <input
              type="text"
              placeholder="Search in products..."
              className="w-full focus:outline-0 placeholder:font-poppins placeholder:font-normal placeholder:text-[14px] placeholder:text-[#4B5563] font-poppins text-[#4B5563]"
            />
          </div>

          {/* ------------------------------ User link and Cart button ------------------------------ */}
          <div id="menu_links" className="flex gap-5.5">
            {/* User link */}
            <Link to="/user">
              <RiUser3Line className="text-[24px] text-[#4B5563] hover:scale-110 hover:font-bold transition duration-300" />
            </Link>

            {/* Cart button */}
            <button onClick={() => setCartOpen(prev => !prev)} className="relative">
              <IoCartOutline className="text-[24px] text-[#4B5563] hover:scale-120 hover:font-bold transition duration-300" />

              {/* ------------------------------ Cart items number ------------------------------ */}
              <div className="w-5 h-5 bg-[#0EA5E9] rounded-full flex justify-center items-center text-white font-poppins font-medium text-[12px] absolute top-[-9px] -right-3">
                0
              </div>
            </button>
          </div>
        </div>
      </div>
      <div><Cart isOpen={cartOpen} closeCart={() => setCartOpen(false)} /></div>
      {/* *********************************** Navbar row part end ******************************** */}
    </nav>
  );
};

export default Navbar;
