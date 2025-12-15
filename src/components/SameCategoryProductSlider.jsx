import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import Slider from "react-slick";
import ProductCard from "./ProductCard";

export default function SameCategoryProductSlider({ category }) {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        const allProducts = res.data.products;

        if (category) {
          setFilteredProducts(
            allProducts.filter((item) => item.category === category)
          );
        } else {
          setFilteredProducts(allProducts);
        }
      })
      .catch(err => console.log(err));
  }, [category]);

  function handleDetails(id, category) {
  navigate(`/product/${id}?category=${category}`);
  }

  return (
    <section className="container">
      <Slider {...settings}>
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            img_src={product.thumbnail}
            title={product.title}
            price={product.price}
            rating={product.rating}
            stock={product.stock}
            category={product.category}
            id={product.id}
            onDetailsClick={handleDetails}
          />
        ))}
      </Slider>
    </section>
  );
}
