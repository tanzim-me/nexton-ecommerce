import React, { useEffect, useState } from "react";
import ProductImage from "../components/ProductImage";
import ProductPrice from "../components/ProductPrice";
import ProductDetails from "../components/ProductDetails";
import { useParams, useSearchParams } from "react-router";
import axios from "axios";
import SameCategoryProductSlider from "../components/SameCategoryProductSlider";

export default function Product() {
  const params = useParams();
  const [current, setCurrent] = useState();
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${params.id}`)
      .then((res) => setCurrent(res.data))
      .catch((err) => console.log(err));

    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [params.id]);

  return (
    <main className="container">
      {current && (
        <>
          <div className="flex gap-8 justify-between mt-10">
            <ProductImage imgSrc={current.thumbnail} loading={!current} />
            <ProductPrice
              rating={current.rating}
              reviewCount={current.stock - 7}
              price={current.price}
              discountPrice={(current.price * 1.7).toFixed(2)}
            />
          </div>

          <hr className="w-[804px] text-[#E5E7EB] my-13" />
          <ProductDetails
            title={current.title}
            description={current.description}
            warranty={current.warrantyInformation}
            policy={current.returnPolicy}
            shipping={current.shippingInformation}
            sales={current.stock + 30}
            rating={current.rating}
            reviewCount={current.stock - 7}
            keywords={current.tags}
          />
        </>
      )}
      <h2 className="font-poppins font-semibold text-[36px] text-theme mt-24 mb-10">
        Recommended products
      </h2>
      <SameCategoryProductSlider category={category} />
    </main>
  );
}
