import React from "react";
import useFetch from "../hooks/useFetch";
import { getProducts } from "../api/product-api";
import Card from "../component/Card";
import DroppingSoon from "../component/DroppingSoon";

const Homepage = () => {
  const { data: products, loading, error } = useFetch(getProducts, []);

  if (loading) return <div className="text-center p-10">Loading...</div>;
  if (error) return <div className="text-red-500">Error: {error.message}</div>;

  // Filter for Tomec brand + take first 4 products
  const tomecProducts = products
    ?.filter((p) => p.brand.toLowerCase() === "tomec")
    .slice(0, 4);

  const nike = products?.find((p) => p.brand.toLowerCase() === "nike");
  const addidas = products?.find((p) => p.brand.toLowerCase() === "addidas");
  const puma = products?.find((p) => p.brand.toLowerCase() === "puma");

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
            brands={'tomec'}
          />
        ))}
      </div>
      <h1 className="text-center m-4 font-bold text-[20px]"> BRAND's </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 m-3">
        <Card
          key={nike.id}
          title={nike.title}
          price={nike.price}
          imgUrl={"http://localhost:8081" + nike.frontImg}
          brands={'nike'}
        />
        <Card
          key={addidas.id}
          title={addidas.title}
          price={addidas.price}
          imgUrl={"http://localhost:8081" + addidas.frontImg}
          brands={'addidas'}
        />
        <Card
          key={puma.id}
          title={puma.title}
          price={puma.price}
          imgUrl={"./puma1.png"}
          brands={'puma'}
        />
      </div>
    </div>
  );
};

export default Homepage;
