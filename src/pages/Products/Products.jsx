import React,{useState,useEffect} from "react";
import { allProductsTitleCard ,bathroomTitleCard, kitchenTitleCard,livingTitleCard, wallTitleCard,floorTitleCard, outdoorTitleCard, clearenceTitleCard} from "../../constants/titleCard";
import NavigationHeader from "../../components/NavigationHeader/NavigationHeader";
import ProductTitleCard from "../../components/ProductTitleCard/ProductTitleCard";
import ProductsList from "../../components/ProductsList/ProductsList";
import FilterBox from "../../components/FilterBox/FilterBox";
import "./Products.scss";
import { useParams } from "react-router-dom";

const Products = () => {
  const [filters,setFilters]=useState([])
  const {type}=useParams()
  
  useEffect(()=>{
    if(type!=="all")
    {
      if(type==="WALL" || type==="FLOOR")
      {
        setFilters(["WALL & FLOOR"])
      }else
      {
        setFilters((prev)=>{
          return [type]
        })
      }
     
    }

  },[])
  return (
    <div className="productsContainer">
      <NavigationHeader first="Collections" second="All Products" />
      {type==="all"&&<ProductTitleCard
        title={allProductsTitleCard.title}
        description={allProductsTitleCard.description}
        image={allProductsTitleCard.image}
      />}
        {type==="BATHROOM"&&<ProductTitleCard
        title={bathroomTitleCard.title}
        description={bathroomTitleCard.description}
        image={bathroomTitleCard.image}
      />}
         {type==="KITCHEN"&&<ProductTitleCard
        title={kitchenTitleCard.title}
        description={kitchenTitleCard.description}
        image={kitchenTitleCard.image}
      />}
        {type==="LIVING"&&<ProductTitleCard
        title={livingTitleCard.title}
        description={livingTitleCard.description}
        image={livingTitleCard.image}
      />}
        {type==="WALL"&&<ProductTitleCard
        title={wallTitleCard.title}
        description={wallTitleCard.description}
        image={wallTitleCard.image}
      />}
          {type==="FLOOR"&&<ProductTitleCard
        title={floorTitleCard.title}
        description={floorTitleCard.description}
        image={floorTitleCard.image}
      />}
      {type==="OUTDOOR"&&<ProductTitleCard
        title={outdoorTitleCard.title}
        description={outdoorTitleCard.description}
        image={outdoorTitleCard.image}
      />}
       {type==="CLEARANCE"&&<ProductTitleCard
        title={clearenceTitleCard.title}
        description={clearenceTitleCard.description}
        image={clearenceTitleCard.image}
      />}
      <div className="filterProductContainer">
        <FilterBox filters={filters} setFilters={setFilters}/>
        <ProductsList filters={filters}/>
      </div>
    </div>
  );
};

export default Products;
