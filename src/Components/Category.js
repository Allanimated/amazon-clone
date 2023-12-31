import React from "react";
import "./Category.css";
import { Link, NavLink } from "react-router-dom";

function Category({ title, image, category }) {
  return (
    <div className="category">
      <h2>{title}</h2>
      <Link to={`/${category}`}>
        <img src={image} alt="img" />
      </Link>
      <div className="category-link">
        <NavLink to={`/${category}`}>Shop Now</NavLink>
      </div>
    </div>
  );
}

export default Category;
