import React from "react";
import Slider from "react-slick";
import { Link } from "react-router";
import { FaArrowRight } from "react-icons/fa";

export default function ExploreCard() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <section className="container">
      <div className="slider-container explore-slider">
        <Slider {...settings}>
          {/* -------------------------- 1st slider part start -------------------------- */}

          <div className="w-[419px]! h-[132px] border border-[#E5E7EB] rounded-2xl p-10 ">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="font-poppins font-semibold text-[24px] text-theme">
                  For Men's
                </h2>
                <p className="font-poppins font-normal text-[14px] text-secondary">
                  Starting at $24
                </p>
              </div>
              <div className="w-[113px] h-9 flex gap-2 justify-center items-center border-l-3 border-[#E5E7EB]">
                <Link
                  to="/explore"
                  className="font-poppins font-medium text-[14px] text-secondary"
                >
                  SHOP NOW
                </Link>
                <FaArrowRight className="text-[16px] text-secondary" />
              </div>
            </div>
          </div>

          {/* -------------------------- 1st slider part end -------------------------- */}
          {/* -------------------------- 2nd slider part start -------------------------- */}

          <div className="w-[419px]! h-[132px] border border-[#E5E7EB] rounded-2xl p-10 ">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="font-poppins font-semibold text-[24px] text-theme">
                  For Women's
                </h2>
                <p className="font-poppins font-normal text-[14px] text-secondary">
                  Starting at $19
                </p>
              </div>
              <div className="w-[113px] h-9 flex gap-2 justify-center items-center border-l-3 border-[#E5E7EB]">
                <Link
                  to="/explore"
                  className="font-poppins font-medium text-[14px] text-secondary"
                >
                  SHOP NOW
                </Link>
                <FaArrowRight className="text-[16px] text-secondary" />
              </div>
            </div>
          </div>

          {/* -------------------------- 2nd slider part end -------------------------- */}
          {/* -------------------------- 3rd slider part start -------------------------- */}

          <div className="w-[419px]! h-[132px] border border-[#E5E7EB] rounded-2xl p-10 ">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="font-poppins font-semibold text-[24px] text-theme">
                  Accessories
                </h2>
                <p className="font-poppins font-normal text-[14px] text-secondary">
                  Explore accessories
                </p>
              </div>
              <div className="w-[113px] h-9 flex gap-2 justify-center items-center border-l-3 border-[#E5E7EB]">
                <Link
                  to="/explore"
                  className="font-poppins font-medium text-[14px] text-secondary"
                >
                  SHOP NOW
                </Link>
                <FaArrowRight className="text-[16px] text-secondary" />
              </div>
            </div>
          </div>

          {/* -------------------------- 3rd slider part end -------------------------- */}
          {/* -------------------------- 4th slider part start -------------------------- */}

          <div className="w-[419px]! h-[132px] border border-[#E5E7EB] rounded-2xl p-10 ">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="font-poppins font-semibold text-[24px] text-theme">
                  For Men's
                </h2>
                <p className="font-poppins font-normal text-[14px] text-secondary">
                  Starting at $24
                </p>
              </div>
              <div className="w-[113px] h-9 flex gap-2 justify-center items-center border-l-3 border-[#E5E7EB]">
                <Link
                  to="/explore"
                  className="font-poppins font-medium text-[14px] text-secondary"
                >
                  SHOP NOW
                </Link>
                <FaArrowRight className="text-[16px] text-secondary" />
              </div>
            </div>
          </div>

          {/* -------------------------- 4th slider part end -------------------------- */}
        </Slider>
      </div>
    </section>
  );
}
