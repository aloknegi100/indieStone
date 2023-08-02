import React from "react";
import "./TitleCard.scss";

const TitleCard = ({ date, title, description, image }) => {
  return (
    <div className="titleCardContainer">
      <div className="titleTextBox">
        {date && <span>{date}</span>}
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <div className="titleImageBox">
        <img src={image} alt="blogImage" />
      </div>
    </div>
  );
};

export default TitleCard;
