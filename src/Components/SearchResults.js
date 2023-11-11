import React, { useEffect, useState, useContext } from "react";
import "./SearchResults.css";
import { useParams } from "react-router-dom";
import { ProductContext } from "../Context/ProductData";
import Product from "./Product";

function SearchResults() {
  const { id } = useParams();
  const [searchItem, setSearchItem] = useState([]);
  //use data from context
  const { cartItems, setCartItems } = useContext(ProductContext);
  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((item) => {
        setSearchItem([...searchItem, item]);
      });
  }, [id]);
  //handle addToCart request
  function addToCart(product) {
    const updatedCartItems = [...cartItems, product];
    setCartItems(updatedCartItems);
  }

  const product = searchItem.map((item) => (
    <Product key={item.title} product={item} addToCart={addToCart} />
  ));

  return (
    <div className="searchResults">
      <div className="results-container">
        <h1>Results</h1>
        <hr />
        <div className="product-row">{product}</div>
      </div>
    </div>
  );
}

export default SearchResults;
