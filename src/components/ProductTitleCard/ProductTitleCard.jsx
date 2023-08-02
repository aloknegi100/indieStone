import React from "react";
import "./ProductTitleCard.scss";

const ProductTitleCard = ({ title, description, image }) => {
  return (
    <div className="productTitleCardContainer">
      <div className="productTitleTextBox">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <div className="productTitleImageBox">
        <img src={image} alt="blogImage" />
      </div>
    </div>
  );
};

export default ProductTitleCard;
