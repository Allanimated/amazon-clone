import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function Header() {
  return (
    <div className="header">
      <img
        className="header-logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
      />
      <div className="header-search">
        <input className="header-searchBar" type="text" />
        <SearchIcon className="header-searchIcon" />
      </div>
      <div className="header-nav">
        <div className="header-link">
          <span className="header-linkTopLine">Hello</span>
          <span className="header-linkBottomLine">Sign In</span>
        </div>
        <div className="header-link">
          <span className="header-linkTopLine">Returns</span>
          <span className="header-linkBottomLine">& Oders</span>
        </div>
        <div className="header-link">
          <span className="header-linkTopLine">Your</span>
          <span className="header-linkBottomLine">Prime</span>
        </div>
        <div className="header-basket">
          <ShoppingCartIcon />
          <span className="header-linkBottomLine header-basketCount">0</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
