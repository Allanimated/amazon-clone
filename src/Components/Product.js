import React, { useState } from "react";
import "./Product.css";

function Product({ product, removeFromCart, addToCart, value }) {
  //display rating logic
  const ratings = [];
  for (let index = 1; index < product.rating; index++) {
    ratings.push(<p>⭐</p>);
  }

  const [buttonValue, setButtonValue] = useState("Add to Cart");

  function handleClick(e) {
    if (addToCart) {
      addToCart(product);
      setButtonValue("Added to Cart");
    } else {
      removeFromCart(product);
    }
  }

  return (
    <div className="product">
      <img src={product.images[1]} alt="" />
      <div className="product-info">
        <h3>{product.title}</h3>
        <p className="product-description">{product.description}</p>
        <p className="product-price">
          <small>$</small>
          <strong>{product.price}</strong>
        </p>
        <div className="product-rating">{ratings}</div>
        <button onClick={handleClick}>{value ? value : buttonValue}</button>
      </div>
    </div>
  );
}

export default Product;
