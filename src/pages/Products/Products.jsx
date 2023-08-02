import React from "react";
import { allProductsTitleCard } from "../../constants/titleCard";
import NavigationHeader from "../../components/NavigationHeader/NavigationHeader";
import ProductTitleCard from "../../components/ProductTitleCard/ProductTitleCard";

const Products = () => {
  return (
    <div className="productsContainer">
      <NavigationHeader first="Collections" second="All Products" />
      <ProductTitleCard
        title={allProductsTitleCard.title}
        description={allProductsTitleCard.description}
        image={allProductsTitleCard.image}
      />
    </div>
  );
};

export default Products;
