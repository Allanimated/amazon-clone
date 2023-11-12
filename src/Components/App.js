import React from "react";
import Header from "./Header";
import Home from "./Home";
import ProductList from "./ProductList";
import { Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import Register from "./Register";
import SearchResults from "./SearchResults";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase"; // Import your Firebase configuration
import { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState(null);
  //set user on initial render
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });
  }, []);

  return (
    <div>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <Header user={user} setUser={setUser} />
              <Home />
            </>
          }
        />

        <Route
          path="/:category"
          element={
            <>
              <Header user={user} setUser={setUser} />
              <ProductList />
            </>
          }
        />

        <Route
          path="/checkout"
          element={
            <>
              <Header user={user} setUser={setUser} />
              <Checkout />
            </>
          }
        />
        <Route
          path="/search/:id"
          element={
            <>
              <Header user={user} setUser={setUser} />
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
