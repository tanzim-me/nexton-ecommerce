import React, { useEffect, useState } from "react";
import ProductImage from "../components/ProductImage";
import ProductPrice from "../components/ProductPrice";
import ProductDetails from "../components/ProductDetails";
import ProductSlider from "../components/ProductSlider";
import { useParams } from "react-router";
import axios from "axios";

export default function Product() {
  const params = useParams();
  const [current, setCurrent] = useState();
  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${params.id}`)
      .then((res) => setCurrent(res.data))
      .catch((err) => console.log(err));
  }, [params.id]);
  return (
    <main className="container">
      {current && (
        <>
          <div className="flex gap-8 justify-between mt-10">
            <ProductImage imgSrc={current.thumbnail} />
            <ProductPrice
              rating={current.rating}
              reviewCount={current.stock - 7}
              price={current.price}
              discountPrice={(current.price * 1.7).toFixed(2)}
            />
          </div>

          <hr className="w-[804px] text-[#E5E7EB] my-13" />
          <ProductDetails title={current.title} description={current.description} warranty={current.warrantyInformation} policy={current.returnPolicy} shipping={current.shippingInformation} sales={current.stock + 30} rating={current.rating} reviewCount={current.stock - 7} keywords={current.tags} />
        </>
      )}
      <h2 className="font-poppins font-semibold text-[36px] text-theme mt-24 mb-10">
        Recommended products
      </h2>
      <ProductSlider />
    </main>
  );
}
