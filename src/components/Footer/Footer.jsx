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
      <div className="bottom">
        <div className="bottomColumn">
          <h3>Products</h3>
          <span>ALL PRODUCTS</span>
          <span>CLASSIC RANGE</span>
          <span>CLEARANCE</span>
          <span>NEW ARRIVALS</span>
          <span>FIXING & SEALING</span>
          <span>FABRICATION & SLABS</span>
          <span>STONE BASINS</span>
        </div>
        <div className="bottomColumn">
          <h3>Products</h3>
          <span>ABOUT US</span>
          <span>SHOWROOMS</span>
          <span>QUANTITY DISCOUNTS</span>
          <span>CAREERS</span>
          <span>BLOG</span>
          <span>PRIVACY POLICY</span>
          <span>ENVIRONMENTAL POLICY</span>
          <span>TERMS & CONDITIONS</span>
        </div>
        <div className="bottomColumn">
          <h3>Products</h3>
          <span>ORDERING SAMPLES</span>
          <span>GENERAL INFORMATION</span>
          <span>MATERIAL TYPES</span>
          <span>INSTALLATION</span>
          <span>ADHESIVE & GROUT SELECTOR</span>
          <span>SEALING & MAINTENANCE</span>
          <span>SEALANT SELECTOR</span>
          <span>STONE & PORCELAIN LAYOUTS</span>
          <span>INSTALLATION GUIDES</span>
          <span>GLOSSARY OF TERMS</span>
          <span>FAQ</span>
        </div>
        <div className="bottomColumn">
          <h3>Products</h3>
          <span>GENERAL ENQUIRIES</span>
          <span>TRADE ENQUIRIES</span>
          <span>PRESS ENQUIRIES</span>
          <span>REQUEST A LOOKBOOK</span>
          <span>T: +91 8383971903</span>
          <span>E: ALOKNEGI100@GMAIL.COM</span>
          <span>FOLLOW US ONLINE</span>
        </div>
      </div>
      <div className="companyText">© MANDARIN STONE 2023</div>
    </div>
  );
};

export default Footer;
