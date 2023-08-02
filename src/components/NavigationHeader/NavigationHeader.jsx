import React from "react";
import "./NavigationHeader.scss";

const NavigationHeader = ({ first, second }) => {
  return (
    <div className="navigationHeader">
      <h6>{first}</h6>
      <span>{">"}</span>
      <h6>{second}</h6>
    </div>
  );
};

export default NavigationHeader;
