import React from "react";
import "./Product.css";

function Product({ product }) {
  const ratings = [];
  for (let index = 1; index < product.rating; index++) {
    ratings.push(<p>⭐</p>);
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
        <button>Add to Cart</button>
      </div>
    </div>
  );
}

export default Product;
