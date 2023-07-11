import React from "react";
import "./Footer.scss";
import MovableText from "../MovableText/MovableText";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="topLeft">
          <p>Featured In</p>
        </div>
        <div className="topRight"></div>
      </div>
      <MovableText />
      <div className="bottom"></div>
    </div>
  );
};

export default Footer;
