import React from "react";
import "./TileIdeas.scss";
import leftParent from "../../assets/leftParent.jpeg";
import leftChild from "../../assets/leftChild.jpeg";
import rightParent from "../../assets/rightParent.jpeg";
import rightChild from "../../assets/rightChild.jpeg";
import { LiaGreaterThanSolid } from "react-icons/lia";
import { Link } from "react-router-dom";

const TileIdeas = () => {
  return (
    <div className="wrapper">
      <div className="leftContainer">
        <img src={leftParent} alt="" className="leftParent" />
        <img src={leftChild} alt="" className="leftChild" />
      </div>
      <div className="middleContainer">
        <h1>8 Tile Ideas for Small Bathrooms</h1>
        <p>
          Searching for inspiration for a compact bathroom or shower? We’ve
          compiled some of our favourite small-space tips to help you find the
          perfect tiles for your scheme.
        </p>
        <Link to={"/blog"} className="link">
          <h6>
            READ THE BLOG &emsp;
            <LiaGreaterThanSolid />
          </h6>
        </Link>
      </div>
      <div className="rightContainer">
        <img src={rightChild} alt="" className="rightChild" />
        <img src={rightParent} alt="" className="rightParent" />
      </div>
    </div>
  );
};

export default TileIdeas;
