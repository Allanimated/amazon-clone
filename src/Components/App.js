import React from "react";
import Header from "./Header";
import Home from "./Home";
import ProductList from "./ProductList";
import { Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import Register from "./Register";
import SearchResults from "./SearchResults";

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
        <Route
          path="/search/:id"
          element={
            <>
              <Header />
              <SearchResults />
            </>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
