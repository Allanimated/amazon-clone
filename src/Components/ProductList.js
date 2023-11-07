import React from "react";
import "./ProductList.css";
import Product from "./Product";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function ProductList() {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/category/${category}`)
      .then((res) => res.json())
      .then(({ products }) => {
        //console.log(products);
        setProducts(products);
      });
  }, [category]);

  const productList = products.map((product) => (
    <Product key={product.id} product={product} />
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
