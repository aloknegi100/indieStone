import React from "react";
import "./HoverImage.scss";
import image from "../../assets/hoverImage.jpeg";

const HoverImage = () => {
  return (
    <div className="hoverContainer">
      <div className="hoverWrapper">
        <div className="hoverImageText">
          <p>comprehensive and exciting collections</p>
          <h1>Shop all products</h1>
        </div>
        <img src={image} alt="hoverImage" className="hoverImage" />
        <h6>SHOP NOW</h6>
      </div>
    </div>
  );
};

export default HoverImage;
