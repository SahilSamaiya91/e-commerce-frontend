import React from "react";
import useFetch from "../hooks/useFetch";
import { getProducts } from "../api/product-api";
import Card from "../component/Card";
import DroppingSoon from "../component/DroppingSoon";

const Homepage = () => {
  const { data: products, loading, error } = useFetch(getProducts);

  if (loading) return <div className="text-center p-10">Loading...</div>;
  if (error) return <div className="text-red-500">Error: {error.message}</div>;

  // Filter for Tomec brand + take first 4 products
  const tomecProducts = products
    ?.filter((p) => p.brand.toLowerCase() === "tomec")
    .slice(0, 4);

  const brandMap = new Map();

  products?.forEach((product) => {
    const brand = product.brand.toLowerCase();
    if (!brandMap.has(brand) && brand != "tomec") {
      brandMap.set(brand, product); // first product of that brand
    }
  });

  const brandProducts = Array.from(brandMap.values());  // okay here we have extracted one one value of ecah brand product
  


  return (
    <div>
      <DroppingSoon />
      <h1 className="text-center m-4 font-bold text-[20px]">
        {" "}
        WEEK'S HOTTEST DROP{" "}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {tomecProducts.map((product) => (
          <Card
            key={product.id}
            title={product.title}
            price={product.price}
            imgUrl={"http://localhost:8081" + product.frontImg}
            brands={product.brand}
          />
        ))}
      </div>
      <h1 className="text-center m-4 font-bold text-[20px]"> BRAND's </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 m-3">
        {brandProducts.map((product) => (
          <Card
            key={product.id}
            imgUrl={"http://localhost:8081" + product.frontImg}
            brands={product.brand}
          />
        ))}
      </div>
    </div>
  );
};

export default Homepage;
