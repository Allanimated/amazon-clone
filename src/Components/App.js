import React from "react";
import Header from "./Header";
import Home from "./Home";
import ProductList from "./ProductList";
import { Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";

function App() {
  return (
    <div>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <Header />
              <Home />
            </>
          }
        />

        <Route
          path="/:category"
          element={
            <>
              <Header />
              <ProductList />
            </>
          }
        />

        <Route
          path="/checkout"
          element={
            <>
              <Header />
              <Checkout />
            </>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
