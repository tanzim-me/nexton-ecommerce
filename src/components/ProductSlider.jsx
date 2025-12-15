import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import axios from "axios";
import ProductCard from "./ProductCard";
import { useNavigate } from "react-router";

export default function ProductSlider() {
  const [products, setProducts] = useState([]);
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
    .then((res) => setProducts(res.data.products))
    .catch(console.log);
  }, []);

  function handleDetails(id, category) {
  navigate(`/product/${id}?category=${category}`);
  }

  return (
    <section className="container">
      <div className="slider-container product-slider">
        <Slider {...settings}>
          {products.map((product) => (
            <div>
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
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
