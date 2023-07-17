import React from "react";
import Slider from "../../components/Slider/Slider";
import "./Home.scss";
import MovableText from "../../components/MovableText/MovableText";
import TileIdeas from "../../components/TileIdeas/TileIdeas";
import HoverImage from "../../components/HoverImage/HoverImage";
import BigBoxHover from "../../components/BigBoxHover/BigBoxHover";
import big1 from "../../assets/big1.jpeg";
import big2 from "../../assets/big2.jpeg";
import big3 from "../../assets/big3.jpeg";
import big4 from "../../assets/big4.jpg";

const Home = () => {
  let texts = [
    {
      describe: "Latest & Greatest",
      heading: "New Arrivals",
      linkText: "SHOP NOW",
    },
    {
      describe: "Browse by",
      heading: "Room Type & Usage",
      linkText: "SHOP NOW",
    },
    {
      describe: "First 4 Samples are free",
      heading: "Order Samples",
      linkText: "Order Now",
    },
    {
      describe: "Visit us",
      heading: "Showrooms",
      linkText: "Explore",
    },
  ];
  return (
    <div>
      <Slider />
      <MovableText />
      <TileIdeas />
      <HoverImage />
      <div className="big">
        <div className="b12">
          <BigBoxHover
            image={big1}
            height="730px"
            width="571.2px"
            describe={texts[0].describe}
            heading={texts[0].heading}
            linkText={texts[0].linkText}
          />
          <BigBoxHover
            image={big2}
            height="630px"
            width="625.5px"
            describe={texts[1].describe}
            heading={texts[1].heading}
            linkText={texts[1].linkText}
            className="moveUp"
          />
        </div>
        <div className="b34">
          <BigBoxHover
            image={big3}
            height="630px"
            width="625.5px"
            describe={texts[2].describe}
            heading={texts[2].heading}
            linkText={texts[2].linkText}
          />
          <BigBoxHover
            image={big4}
            height="730px"
            width="571px"
            describe={texts[3].describe}
            heading={texts[3].heading}
            linkText={texts[3].linkText}
            className="moveUp"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
