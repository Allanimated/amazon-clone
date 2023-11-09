import React from "react";
import "./ProductList.css";
import Product from "./Product";
import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { ProductContext } from "../Context/ProductData";

function ProductList() {
  //recieve a particular parameter from a category
  const { category } = useParams();
  //set product state
  const [products, setProducts] = useState([]);
  //use data from context
  const { cartItems, setCartItems } = useContext(ProductContext);
  //handle addToCart request
  function addToCart(product) {
    const updatedCartItems = [...cartItems, product];
    setCartItems(updatedCartItems);
  }
  //fetch data from API
  useEffect(() => {
    fetch(`https://dummyjson.com/products/category/${category}`)
      .then((res) => res.json())
      .then(({ products }) => {
        //console.log(products);
        setProducts(products);
      });
  }, [category]);
  //Transform product objects into component markup
  const productList = products.map((product) => (
    <Product key={product.id} product={product} addToCart={addToCart} />
  ));

  return (
    <div className="products">
      <div className="product-container">
        <div className="product-row">{productList}</div>
      </div>
    </div>
  );
}

export default ProductList;
