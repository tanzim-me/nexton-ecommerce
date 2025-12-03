import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Services from "../components/Services";
import Header from "../components/Header";
import ExploreCard from "../components/ExploreCard";
import Banner from "../components/Banner";
import ProductSlider from "../components/ProductSlider";
import FooterImage from "../components/FooterImage";

export default function Home() {
  return (
    <>
      {/* ******************************* Banner part start **************************** */}
      <Banner />
      {/* ******************************* Banner part end **************************** */}
      {/* ******************************* Services part start **************************** */}
      <Services />
      {/* ******************************* Services part end **************************** */}
      {/* ******************************* Explore part start **************************** */}
      <Header bold_text={"Start exploring."} light_text={" Good things are waiting for you"} margin_top={"mt-[88px]"} />
      <ExploreCard />
      {/* ******************************* Explore part end **************************** */}
      {/* ******************************* Recommendations part start **************************** */}
      <Header bold_text={"Recommendations."} light_text={" Best matching products for you"} margin_top={"mt-[176px]"} />
      <ProductSlider />
      {/* ******************************* Recommendations part end **************************** */}
      {/* ******************************* Best sellers part start **************************** */}
      <Header bold_text={"Best Sellers."} light_text={" Best selling of the month"} margin_top={"mt-[176px]"} />
      <ProductSlider />
      {/* ******************************* Best sellers part end **************************** */}
      {/* ******************************* Footer image part start **************************** */}
      <FooterImage />
      {/* ******************************* Footer image part end **************************** */}
    </>
  );
}
