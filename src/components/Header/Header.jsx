import React from "react";
import { BsPerson } from "react-icons/bs";
import { LiaSearchSolid, LiaShoppingBasketSolid } from "react-icons/lia";
import { Link, useNavigate } from "react-router-dom";

import "./Header.scss";
const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="header">
      <div className="top">
        <div className="left">
          <LiaSearchSolid /> <input type="text" placeholder="I'm Looking For" />
        </div>
        <div className="center">
          <Link to="/" className="link">
            <h1>INDIE STONE</h1>
          </Link>
        </div>
        <div className="right">
          <span>Showrooms</span>
          <span>Information</span>
          <span
            onClick={() => navigate("/my-account")}
            className="userlogo icons"
          >
            <BsPerson />
          </span>
          <span className="icons">
            <LiaShoppingBasketSolid />
          </span>
        </div>
      </div>
      <div className="bottom">
        <Link to="/products" className="link">
          <span>Shop</span>
        </Link>
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
