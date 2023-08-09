import React from "react";
import "./ProductCard.scss";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  return (
    <div
      className="productCard"
      onClick={() => navigate(`/product/${product?._id}`, { state: product })}
    >
      <div className="productCardImage">
        <img src={product?.image?.[0]} />
      </div>
      <div className="productNameContainer">
        {product?.name}
        <h6>
          FROM RS {product?.price}/M<sup>2</sup>
        </h6>
      </div>
    </div>
  );
};

export default ProductCard;
