import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import NavigationHeader from "../../components/NavigationHeader/NavigationHeader";
import "./Product.scss";
const Product = ({ product }) => {
  const [currImage, setCurrImage] = useState(0);
  const [selected, setSelected] = useState(0);
  const [pieces, setPieces] = useState();
  const [quantity, setQuantity] = useState();

  const location = useLocation();
  const { image, name, specification, information, description, price } =
    location?.state;

  console.log("specifications", specification);
  return (
    <div className="productWrapper">
      <NavigationHeader
        first="Collections"
        second="All Products"
        third={name}
      />
      <div className="productContainer">
        <div className="imageList">
          {image?.map((i, index) => {
            return (
              <>
                <div
                  onClick={() => setCurrImage(index)}
                  style={{
                    border: index === currImage ? "1px solid #dd7f41" : "",
                    padding: "3px",
                  }}
                >
                  <img src={i} alt="" />
                </div>
              </>
            );
          })}
        </div>
        <div className="imageShow">
          <img src={image?.[currImage]} alt={name} />
        </div>
        <div className="productDetail">
          <h1>{name}</h1>
          <div className="priceTag">
            <h6>FROM</h6>
            <span>
              RS {price} / M<sup>2</sup>
            </span>
          </div>
          <div className="switchDetailButtons">
            <h1
              onClick={() => setSelected(0)}
              style={{
                color: selected === 0 ? "#1d2328" : "",
                borderBottomColor: selected === 0 ? "#dd7f41" : "",
                borderWidth: 2,
                transition: ".5s",
              }}
            >
              Specification
            </h1>
            <h1
              onClick={() => setSelected(1)}
              style={{
                color: selected === 1 ? "#1d2328" : "",
                borderBottomColor: selected === 1 ? "#dd7f41" : "",
                borderWidth: 2,
                transition: ".5s",
              }}
            >
              Description
            </h1>
            <h1
              onClick={() => setSelected(2)}
              style={{
                color: selected === 2 ? "#1d2328" : "",
                borderBottomColor: selected === 2 ? "#dd7f41" : "",
                borderWidth: 2,
                transition: ".5s",
              }}
            >
              Information
            </h1>
          </div>
          <div className="switchDetails">
            {selected === 0 && (
              <table>
                <tbody>
                  {Object?.keys(specification)?.map((item, index) => (
                    <tr key={index}>
                      <td>{item}</td>
                      <td>
                        {specification?.[item]?.map((text) => `${text}, `)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
            {selected === 1 && <p>{description}</p>}
            {selected === 2 && (
              <>
                <h3>Useful Information</h3>
                <p>{information}</p>
              </>
            )}
          </div>
          <div className="orderSizing">
            <h3 className="orderSizingHeader">
              <span style={{ color: "#dd7f41" }}>1.</span> Choose Size
            </h3>
            <button className="chooseSizeButton">
              <h4>
                Click here to choose a size:
                <span style={{ color: "#dd7f41" }}> 600X600X10</span>
              </h4>
            </button>
            <h3 className="orderSizingHeader" style={{ marginTop: "2rem" }}>
              <span style={{ color: "#dd7f41" }}>2.</span> Choose Quantity
            </h3>
            <div className="chooseQuantity">
              <div>
                <h6>QTY (PIECE)</h6>
                <input
                  type="number"
                  value={pieces}
                  onChange={(e) => {
                    setPieces(e.target.value);
                    setQuantity((e.target.value * 0.36).toFixed(2));
                  }}
                ></input>
              </div>
              <span style={{ color: "#dd7f41" }}>{"<=>"}</span>
              <div>
                <h6>
                  QTY (M<sup>2</sup>)
                </h6>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => {
                    setQuantity(e.target.value);
                    setPieces(Math.ceil((e.target.value * 1) / 0.36));
                  }}
                ></input>
              </div>
            </div>
          </div>
          <button className="addToBasketButton">ADD TO BASKET</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
