import React from "react";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
const CartItemsContainer = ({ isCartVisible,cartitems,removeFromCart }) => {
  return (
    <div class={`cart-items-container ${isCartVisible ? "active" : ""}`}>
      {cartitems.map((item, index) => (
        <CartItem
          key={index}
          imageSrc={item.imageSrc}
          price={item.price}
          number={index + 1}
          removeFromCart={removeFromCart}
        />
      ))}
      <Link to="/checkout" class="btn ordernowbtn">Checkout?</Link>
    </div>
  );
};

export default CartItemsContainer;
