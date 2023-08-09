import React, { useEffect, useState } from "react";
import "./ProductsList.scss";
import { getProductsDB } from "../../services/getProductsDB";
import ProductCard from "../ProductCard/ProductCard";

const ProductsList = () => {
  const [products, setProducts] = useState([]);

  const fetchAllProducts = async () => {
    const allProduct = await getProductsDB();
    if (allProduct.success) {
      setProducts(allProduct?.message);
    }
  };
  useEffect(() => {
    fetchAllProducts();
  }, []);

  console.log("products", products);
  return (
    <div className="ProductsList">
      {products?.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
};

export default ProductsList;
