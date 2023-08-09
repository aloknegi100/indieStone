import React from "react";
import "./NavigationHeader.scss";
import { useNavigate } from "react-router-dom";

const NavigationHeader = ({ first, second, third }) => {
  let navigate = useNavigate();
  return (
    <div className="navigationHeader">
      <h6>{first}</h6>
      <span>{">"}</span>
      <h6 onClick={() => navigate("/products")}>{second}</h6>
      {third && (
        <>
          <span>{">"}</span>
          <h6>{third}</h6>
        </>
      )}
    </div>
  );
};

export default NavigationHeader;
