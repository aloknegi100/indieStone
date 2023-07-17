import React from "react";
import "./BigBoxHover.scss";

const BigBoxHover = ({
  image,
  height,
  width,
  describe,
  heading,
  linkText,
  className,
}) => {
  console.log("hover", height);
  return (
    <div
      className={`bigBox ${className ? className : ""}`}
      style={{ height: height, width: width }}
    >
      <div className="bigBoxWrapper">
        <div className="textBox">
          <p>{describe}</p>
          <h1>{heading}</h1>
        </div>
        <img src={image} alt="" />
        <h6>{linkText}</h6>
      </div>
    </div>
  );
};

export default BigBoxHover;
