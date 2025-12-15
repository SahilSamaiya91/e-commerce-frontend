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

  return (
    <div>
      <DroppingSoon/>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {tomecProducts.map((product) => (
          <Card
            key={product.id}
            title={product.title}
            price={product.price}
            imgUrl={product.frontImg}
          />
        ))}
      </div>
    </div>
  );
};

export default Homepage;