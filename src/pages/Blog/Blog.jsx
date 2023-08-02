import React from "react";
import TitleCard from "../../components/TitleCard/TitleCard";
import { blogTitleCard } from "../../constants/titleCard";
import { blog1 } from "../../constants/blog";
import "./Blog.scss";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div>
      <TitleCard
        date={blogTitleCard.date}
        title={blogTitleCard.title}
        description={blogTitleCard.description}
        image={blogTitleCard.image}
      />
      <div className="blogContent">
        {blog1.introHead.map((item) => {
          return (
            <h4
              style={{
                fontSize: item.fontSize,
                fontWeight: item.fontWeight,
                fontFamily: item.fontFamily,
              }}
            >
              {item.text}
            </h4>
          );
        })}
        <div className="blogPoints">
          {blog1.points.map((item, index) => {
            return (
              <>
                <h1>
                  <span>{index + 1}.</span>
                  {item.title}
                </h1>
                <img src={item.image} alt="pointImage" />
                <p>{item.text}</p>
              </>
            );
          })}
        </div>
      </div>
      <div className="exploreLinkDiv">
        <Link to="/">
          <h1>Explore More Bathroom Tiles</h1>
        </Link>
      </div>
    </div>
  );
};

export default Blog;
