import React, { useState, useEffect, useRef } from "react";
import "./Slider.scss";
import firstImage from "../../assets/first.jpeg";
import secondImage from "../../assets/second.jpeg";
import thirdImage from "../../assets/third.jpeg";
import fourthImage from "../../assets/fourth.jpeg";
import { LiaGreaterThanSolid } from "react-icons/lia";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 4;
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    }, 7000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [totalSlides]);

  const handleButtonClick = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  return (
    <div className="containerSlide">
      <div className="buttons">
        <input
          type="radio"
          id="one"
          checked={currentSlide === 0}
          onChange={() => handleButtonClick(0)}
        />
        <input
          type="radio"
          id="two"
          checked={currentSlide === 1}
          onChange={() => handleButtonClick(1)}
        />
        <input
          type="radio"
          id="three"
          checked={currentSlide === 2}
          onChange={() => handleButtonClick(2)}
        />
        <input
          type="radio"
          id="four"
          checked={currentSlide === 3}
          onChange={() => handleButtonClick(3)}
        />
      </div>
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 25}%)` }}
      >
        <div className="slide">
          <div>
            <h3>Outdoor Living</h3>
            <p>
              If you’re planning on refreshing your garden, then look to our
              vast range of external natural stone and porcelain tiles, with
              styles ranging from country to contemporary.
            </p>
            <span>
              SHOP NOW <LiaGreaterThanSolid />
            </span>
          </div>
          <img src={firstImage} alt="" id="first" />
        </div>
        <div className="slide">
          <div>
            <h3>Nature Inspired</h3>
            <p>
              Step your neutral palette up a notch with tiles in earthy colours,
              such as rust and terracotta, nut browns, sandy tones and mushroom
              shades.
            </p>
            <span>
              SHOP NOW <LiaGreaterThanSolid />
            </span>
          </div>
          <img src={secondImage} alt="" id="second" />
        </div>
        <div className="slide">
          <div>
            <h3>Raw Materials</h3>
            <p>
              Sometimes there’s nothing quite like the look of natural stone,
              which is why we continue to seek out the finest stone tiles from
              around the world. Shellstone, shown here, is a beautiful brushed
              limestone from Portugal that’s peppered with silver-grey fossils.
            </p>
            <span>
              SHOP NOW <LiaGreaterThanSolid />
            </span>
          </div>
          <img src={thirdImage} alt="" id="third" />
        </div>
        <div className="slide">
          <div>
            <h3>Clearance Sale</h3>
            <p>
              New lines added. Beautiful tiles at discounted prices, available
              whilst stocks last.
            </p>
            <span>
              SHOP NOW <LiaGreaterThanSolid />
            </span>
          </div>
          <img src={fourthImage} alt="" id="fourth" />
        </div>
      </div>
    </div>
  );
};

export default Slider;
