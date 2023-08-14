import React, { useEffect, useState } from "react";
import "./FilterBox.scss";
import { getProductsDB } from "../../services/getProductsDB";

const FilterBox = ({filters,setFilters}) => {
  const [clicked, setClicked] = useState("");
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState([]);

  const handleFilterClick=(item,property)=>{
    if(filters.find((x)=>x===property)){
      let index=filters.indexOf(property);
      
      if(index!==-1)
      {
        let temp=[...filters]

        temp.splice(index,1);
        setFilters(temp)
        return;
      }
    }
    setFilters((prev)=>{
      return [...prev,property]
    })
  }

  const fetchAllProducts = async () => {
    const allProduct = await getProductsDB();
    console.log("all", allProduct);
    if (allProduct.success) {
      const temp = {};
      allProduct?.message?.forEach((product) => {
        for (let key in product?.specification) {
          if (!temp[key]) temp[key] = [];
          temp[key] = [
            ...new Set([...temp[key], ...product?.specification?.[key]]),
          ];
        }
      });
      setFilter(temp);
      setProducts(allProduct?.message);
    }
  };

  console.log("filter", filters);
  useEffect(() => {
    fetchAllProducts();
  }, []);

  return (
    <div className="filterBox">
      <div className="filterHeading">
        <h3>Filter</h3>
        <span>Hide Filter</span>
      </div>
      <button className="clearFilterButton" onClick={()=>setFilters([])}>Clear Filter</button>
      {Object?.keys(filter)?.map((item, index) => {
        return (
          <div className="productFilterGroup" key={index}>
            <div className="productGroupFilter">
              <div className="filterClick">
                {item}{" "}
                {clicked === item ? (
                  <button onClick={() => setClicked("")}>x</button>
                ) : (
                  <button onClick={() => setClicked(item)}>+</button>
                )}
              </div>
              <div
                className={`subFilter ${clicked !== item ? "hideClass" : ""}`}
              >
                <span>Show All</span>
                {filter?.[item]?.map((property, idx) => (
                  <span key={100 + idx} onClick={()=>handleFilterClick(item,property)} style={(()=>{
                    if(filters.find((x)=>x===property)){
                      return {background:"#1d2328",color:"white",padding:10}
                    }
                  })()}>{property}</span>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FilterBox;
