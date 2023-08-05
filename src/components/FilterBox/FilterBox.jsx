import React, { useState } from "react";
import "./FilterBox.scss";

const FilterBox = () => {
  const [clicked, setClicked] = useState("");
  let product = {
    name: "Terrazzo Nouveau Ivory Matt Terrazzo Effect Porcelain",
    price: "6716.2",
    description:
      "Originating in Italy over 500 years ago, Terrazzo has made a major comeback and is now one of our hottest trends. This terrazzo porcelain tile perfectly replicates marble chippings set into cement and then finished to a smooth matt finish.Containing fragments of grey, bone and warm taupe colours, this terrazzo tile range is ultra-cool and ultra-versatile.Suitable for walls and floors in all areas of your home, we are super impressed that the colouration runs through the full body of the smooth, matt porcelain tile.",
    specification: {
      "suitable for": [
        "bathroom",
        "indoor",
        "kitchen",
        "living",
        "wall & floor",
      ],
      "slip rating": ["ptv +36 wet", "r 10"],
      properties: ["high traffic", "rectified"],
      color: ["white", "black"],
      shape: ["square", "heart"],
      material: ["marble", "limestone"],
    },

    information:
      "Due to the nature of porcelain tiles and the way that they are produced, a degree of variation in dimensions should be expected. Whilst this is minimal, it can become more noticeable on larger format tiles. In order to avoid emphasising this, if staggering joints then it should be by a maximum of 30% of the length.",
  };

  return (
    <div className="filterBox">
      <div className="filterHeading">
        <h3>Filter</h3>
        <span>Hide Filter</span>
      </div>
      <button className="clearFilterButton">Clear Filter</button>
      {Object.keys(product?.specification ?? {})?.map((item, index) => {
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
                {product?.specification?.[item]?.map((property, idx) => (
                  <span key={100 + idx}>{property}</span>
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
