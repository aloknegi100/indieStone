import React,{useState} from "react";
import { allProductsTitleCard } from "../../constants/titleCard";
import NavigationHeader from "../../components/NavigationHeader/NavigationHeader";
import ProductTitleCard from "../../components/ProductTitleCard/ProductTitleCard";
import ProductsList from "../../components/ProductsList/ProductsList";
import FilterBox from "../../components/FilterBox/FilterBox";
import "./Products.scss";

const Products = () => {
  const [filters,setFilters]=useState([])

  return (
    <div className="productsContainer">
      <NavigationHeader first="Collections" second="All Products" />
      <ProductTitleCard
        title={allProductsTitleCard.title}
        description={allProductsTitleCard.description}
        image={allProductsTitleCard.image}
      />
      <div className="filterProductContainer">
        <FilterBox filters={filters} setFilters={setFilters}/>
        <ProductsList filters={filters}/>
      </div>
    </div>
  );
};

export default Products;
