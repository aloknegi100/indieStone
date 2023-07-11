import React from "react";
import { BsPerson } from "react-icons/bs";
import { LiaSearchSolid, LiaShoppingBasketSolid } from "react-icons/lia";
import "./Header.scss";
const Header = () => {
  return (
    <div className="header">
      <div className="top">
        <div className="left">
          <LiaSearchSolid /> <input type="text" placeholder="I'm Looking For" />
        </div>
        <div className="center">
          <h1>INDIE STONE</h1>
        </div>
        <div className="right">
          <span>Showrooms</span>
          <span>Information</span>
          <span className="icons">
            <BsPerson />
          </span>
          <span className="icons">
            <LiaShoppingBasketSolid />
          </span>
        </div>
      </div>
      <div className="bottom">
        <span>Shop</span>
        <span>Bathroom</span>
        <span>Kitchen</span>
        <span>Living</span>
        <span>Wall</span>
        <span>Floor</span>
        <span>Outdoor</span>
        <span>Flexing & Sealing</span>
        <span>Fabrication & Slabs</span>
        <span>Trends</span>
        <span>Clearence</span>
      </div>
    </div>
  );
};

export default Header;
