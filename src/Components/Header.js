import React, { useContext } from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { ProductContext } from "../Context/ProductData";

function Header() {
  const { cartItems } = useContext(ProductContext);
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header-logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>
      <div className="header-search">
        <input className="header-searchBar" type="text" />
        <SearchIcon className="header-searchIcon" />
      </div>
      <div className="header-nav">
        <div className="header-link">
          <Link to="/login">
            <span className="header-linkTopLine">Hello, sign in</span>
            <span className="header-linkBottomLine">Account & Lists</span>
          </Link>
        </div>
        <div className="header-link">
          <span className="header-linkTopLine">Returns</span>
          <span className="header-linkBottomLine">& Oders</span>
        </div>
        <div className="header-basket">
          <Link to="/checkout">
            <ShoppingCartIcon />
          </Link>
          <span className="header-linkBottomLine header-basketCount">
            {cartItems ? cartItems.length : "0"}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
