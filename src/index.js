import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Components/App";
import { BrowserRouter as Router } from "react-router-dom";
// import the provider
import { ProductProvider } from "./Context/ProductData";

ReactDOM.render(
  <Router>
    <ProductProvider>
      <App />
    </ProductProvider>
  </Router>,
  document.getElementById("root")
);
