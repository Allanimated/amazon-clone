import React, { useContext } from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { ProductContext } from "../Context/ProductData";
import Product from "./Product";

function Checkout() {
  const { cartItems, setCartItems } = useContext(ProductContext);
  //handle remove from cart request
  function removeFromCart(product) {
    //remove items using their indices
    const index = cartItems.findIndex((cartItem) => cartItem.id === product.id);
    const updatedCartItems = [...cartItems];
    if (index >= 0) {
      updatedCartItems.splice(index, 1);
      setCartItems(updatedCartItems);
    }
  }
  //transform product objects into component markup
  const cart = cartItems.map((product) => (
    <div className="grid-item">
      <Product
        key={product.id}
        product={product}
        removeFromCart={removeFromCart}
        value={"Remove from Cart"}
      />
    </div>
  ));
  return (
    <div className="checkout">
      <div className="checkout-left">
        <img
          className="checkout-ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
        <div>
          <h2 className="checkout-title">Shopping Cart</h2>
        </div>
        <div className="checkout-grid">{cart}</div>
      </div>

      <div className="checkout-right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
