import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./Components/App";
import { BrowserRouter as Router } from "react-router-dom";
// import the provider
import { ProductProvider } from "./Context/ProductData";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <ProductProvider>
      <App />
    </ProductProvider>
  </Router>
);
