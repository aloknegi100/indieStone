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
        <Link to="/products/all" className="link">
          <span>Shop</span>
        </Link>
        <Link to="/products/BATHROOM" className="link">
          <span>Bathroom</span>
        </Link>
        <Link to="/products/KITCHEN" className="link">
          <span>Kitchen</span>
        </Link>
        <Link to="/products/LIVING" className="link">
          <span>Living</span>
        </Link>
        <Link to="/products/WALL" className="link">
          <span>Wall</span>
        </Link>
        <Link to="/products/FLOOR" className="link">
          <span>Floor</span>
        </Link>
        <Link to="/products/OUTDOOR" className="link">
          <span>Outdoor</span>
        </Link>
        <Link to="/products/WALL & FLOOR" className="link">
          <span>Flexing & Sealing</span>
        </Link>
        <Link to="/products/WALL & FLOOR" className="link">
          <span>Fabrication & Slabs</span>
        </Link>
        <Link to="/products/WALL & FLOOR" className="link">
          <span>Trends</span>
        </Link>
        <Link to="/products/CLEARANCE" className="link">
          <span>Clearence</span>
        </Link>
        
      </div>
    </div>
  );
};

export default Header;
