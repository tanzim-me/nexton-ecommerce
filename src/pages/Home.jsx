import React from "react";
import Slider from "react-slick";
import hero from "../assets//images/hero.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router";
import { CiSearch } from "react-icons/ci";

export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
    {/* ******************************* Banner Slider part start **************************** */}
      <div className="slider-container">
        <Slider {...settings}>
          {/* ---------------------------- 1st slider div part start --------------------------- */}

          <div className="w-full relative">
            {/* ---------------------------- slider image --------------------------- */}
            <img src={hero} alt="banner image" className="w-full" />

            {/* ---------------------------- slider texts --------------------------- */}
            <div className="w-[632px] h-[304px] flex flex-col gap-6 justify-start items-start absolute top-[148px] left-[120px]">
              <h2 className="font-poppins font-medium text-[20px] text-[#4B5563]">
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

          <div className="w-full relative">
            {/* ---------------------------- slider image --------------------------- */}
            <img src={hero} alt="banner image" className="w-full" />

            {/* ---------------------------- slider texts --------------------------- */}
            <div className="w-[632px] h-[304px] flex flex-col gap-6 justify-start items-start absolute top-[148px] left-[120px]">
              <h2 className="font-poppins font-medium text-[20px] text-[#4B5563]">
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
      {/* ******************************* Banner Slider part end **************************** */}
    </>
  );
}
