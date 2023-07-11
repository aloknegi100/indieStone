import React from "react";
import "./MovableText.scss";
const MovableText = () => {
  let message =
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident dicta sunt et nulla modi ratione saepe veritatis voluptas amet? Unde, nobis quibusdam assumenda fugiat consequatur nihil rem delectus amet adipisci.";
  return (
    <div className="movable">
      <p>{message}</p>
    </div>
  );
};

export default MovableText;
