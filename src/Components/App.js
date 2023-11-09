import React from "react";
import Header from "./Header";
import Home from "./Home";
import ProductList from "./ProductList";
import { Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/:category" element={<ProductList />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </div>
  );
}

export default App;
