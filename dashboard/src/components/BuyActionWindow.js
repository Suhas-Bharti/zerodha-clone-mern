import React, { useState, useContext } from "react";
import axios from "axios";
import GeneralContext from "./GeneralContext";
// import {  Link } from "react-router-dom";
import "./BuyActionWindow.css";

const BuyActionWindow = ({ stock }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);

  const generalContext = useContext(GeneralContext);

  const handleBuyClick = () => {
    try {
      axios.post("http://localhost:3002/newOrder", {
        name:stock.name,
        qty: Number(stockQuantity),
        price: Number(stockPrice),
        mode: "BUY",
      });

      alert("Order placed successfully!");
      generalContext.closeBuyWindow();

    } catch (error) {
      console.error(error);
    }
  };

  const handleCancelClick = () => {
    generalContext.closeBuyWindow();
  };

  return (
    <div className="container">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              value={stockQuantity}
              onChange={(e) => setStockQuantity(e.target.value)}
            />
          </fieldset>

          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              value={stockPrice}
              onChange={(e) => setStockPrice(e.target.value)}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <div>
          <button className="btn btn-blue" onClick={handleBuyClick}>
            Buy
          </button>

          <button className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;