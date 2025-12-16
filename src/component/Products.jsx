import { useParams } from "react-router-dom";
import { getProducts } from "../api/product-api";
import useFetch from "../hooks/useFetch";
import Card from "./Card";

const Products = () => {
  const { brand } = useParams(); // <-- comes from /b/:brand
  const { data: products, loading, error } = useFetch(getProducts, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const filteredProducts = products?.filter((p) => p.brand.toLowerCase() == brand);
  

  return (
    <div className="p-10">
      <h1 className="text-5xl text-red-500 text-center p-5">
        WELCOME TO PRODUCT PAGE : {brand.toUpperCase()}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProducts.map((product) => (
          <Card
            key={product.id}
            title={product.title}
            price={product.price}
            imgUrl={"http://localhost:8081" + product.frontImg}
            brands={product.brand}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
