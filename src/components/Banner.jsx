import React from "react";
import Slider from "react-slick";
import { Link } from "react-router";
import hero from "../assets//images/hero.png";
import { CiSearch } from "react-icons/ci";

export default function Banner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="slider-container overflow-hidden banner-slider">
      <Slider {...settings}>
        {/* ---------------------------- 1st slider div part start --------------------------- */}

        <div className="w-full focus:outline-0 relative">
          {/* ---------------------------- slider image --------------------------- */}
          <img src={hero} alt="banner image" className="w-full" />

          {/* ---------------------------- slider texts --------------------------- */}
          <div className="w-[632px] h-[304px] flex flex-col gap-6 justify-start items-start absolute top-[148px] left-[120px]">
            <h2 className="font-poppins font-medium text-[20px] text-secondary">
              Starting from: $49.99
            </h2>
            <h1 className="font-poppins font-semibold text-[64px] text-theme leading-none">
              Exclusive collection for everyone
            </h1>

            {/* ---------------------------- Explore now link --------------------------- */}
            <Link className="w-[198px] h-16 bg-theme rounded-full flex gap-2.5 justify-center items-center hover:scale-105 transition duration-300 ">
              <p className="font-poppins font-medium text-[16px] text-white">
                Explore now
              </p>
              <CiSearch className="text-[20px] text-[#F8FAFC]" />
            </Link>
          </div>
        </div>

        {/* ---------------------------- 1st slider div part end --------------------------- */}
        {/* ---------------------------- 2nd slider div part start --------------------------- */}

        <div className="w-full focus:outline-0 relative">
          {/* ---------------------------- slider image --------------------------- */}
          <img src={hero} alt="banner image" className="w-full" />

          {/* ---------------------------- slider texts --------------------------- */}
          <div className="w-[632px] h-[304px] flex flex-col gap-6 justify-start items-start absolute top-[148px] left-[120px]">
            <h2 className="font-poppins font-medium text-[20px] text-secondary">
              Starting from: $49.99
            </h2>
            <h1 className="font-poppins font-semibold text-[64px] text-theme leading-none">
              Exclusive collection for everyone
            </h1>

            {/* ---------------------------- Explore now link --------------------------- */}
            <Link className="w-[198px] h-16 bg-theme rounded-full flex gap-2.5 justify-center items-center hover:scale-105 transition duration-300 ">
              <p className="font-poppins font-medium text-[16px] text-white">
                Explore now
              </p>
              <CiSearch className="text-[20px] text-[#F8FAFC]" />
            </Link>
          </div>
        </div>

        {/* ---------------------------- 2nd slider div part end --------------------------- */}
      </Slider>
    </div>
  );
}
