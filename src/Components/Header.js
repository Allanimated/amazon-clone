import React, { useContext, useState, useEffect } from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { ProductContext } from "../Context/ProductData";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

function Header({ user, setUser }) {
  const { cartItems } = useContext(ProductContext);
  //search state
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://dummyjson.com/products?limit=100`)
      .then((r) => r.json())
      .then((d) => {
        setProducts(d.products);
      });
  }, []);
  //filter data based on search input
  const filter = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );
  //update search results container
  const results = filter.map((result) => (
    <p key={result.title}>
      <TrendingUpIcon />
      <Link to={`/search/${result.id}`}>
        <strong onClick={(e) => setSearch("")}>{result.title}</strong>
      </Link>
    </p>
  ));
  //dynamically show results
  const searchItems = search ? (
    <div className="search-results">{results}</div>
  ) : null;

  //handle logout request

  const handleUser = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <div className="header">
        <Link to="/">
          <img
            className="header-logo"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt=""
          />
        </Link>
        <div className="header-search">
          <input
            className="header-searchBar"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <SearchIcon className="header-searchIcon" />
        </div>
        <div className="header-nav">
          <Link to={!user && "/login"} style={{ textDecoration: "none" }}>
            <div className="header-link" onClick={handleUser}>
              <span className="header-linkTopLine">{`Hello, ${
                user ? "sign out" : "sign in"
              }`}</span>
              <span className="header-linkBottomLine">
                {user
                  ? user.email.replace("@gmail.com", "")
                  : "Accounts & List"}
              </span>
            </div>
          </Link>

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
      {searchItems}
    </>
  );
}

export default Header;
