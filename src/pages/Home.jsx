import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Services from "../components/Services";
import Header from "../components/Header";
import ExploreCard from "../components/ExploreCard";
import Banner from "../components/Banner";

export default function Home() {
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  // };

  return (
    <>
      {/* ******************************* Banner part start **************************** */}
      <Banner />
      {/* ******************************* Banner part end **************************** */}
      {/* ******************************* Services part start **************************** */}
      <Services />
      {/* ******************************* Services part end **************************** */}
      <Header bold_text={"Start exploring."} light_text={"Good things are waiting for you"} margin_top={"mt-[88px]"} />
      <ExploreCard />
    </>
  );
}
