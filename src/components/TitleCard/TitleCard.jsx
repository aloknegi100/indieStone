import React from "react";
import "./TitleCard.scss";
import blogImage from "../../assets/blogImage.jpeg";

const TitleCard = ({ date, title, description, image }) => {
  return (
    <div className="titleCardContainer">
      <div className="titleTextBox">
        <span>{date}</span>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <div className="titleImageBox">
        <img src={blogImage} alt="blogImage" />
      </div>
    </div>
  );
};

export default TitleCard;
