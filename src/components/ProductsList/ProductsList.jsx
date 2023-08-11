import React, { useEffect, useState } from "react";
import "./ProductsList.scss";
import { getProductsDB } from "../../services/getProductsDB";
import ProductCard from "../ProductCard/ProductCard";

const ProductsList = ({filters}) => {
  const [products, setProducts] = useState([]);
  console.log("--",filters);
  const fetchAllProducts = async () => {
    const allProduct = await getProductsDB();
    if (allProduct.success) {
      setProducts(allProduct?.message);
    }
  };
  useEffect(() => {
    fetchAllProducts();
  }, []);

  let filteredProducts = products;

  for (const filter of filters) {
    filteredProducts = filteredProducts.filter(product => {
      // Check if specifications contain the current filter
      let specificationMatch = false;
      
      for (let s in product?.specification) {
        if (product?.specification?.[s]?.includes(filter)) {
          specificationMatch = true;
          break; // Exit the loop as soon as one specification matches
        }
      }
      
      return specificationMatch;
    });
  }
  
  console.log("--xxxx>",filteredProducts);

  console.log("products", products);
  
  return (
    <div className="ProductsList">
      {filteredProducts?.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
};

export default ProductsList;
