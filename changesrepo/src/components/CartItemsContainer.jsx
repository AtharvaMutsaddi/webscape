import React from "react";
import CartItem from "./CartItem";

const CartItemsContainer = ({ isCartVisible,cartitems }) => {
  return (
    <div class={`cart-items-container ${isCartVisible ? "active" : ""}`}>
      {cartitems.map((item, index) => (
        <CartItem
          key={index}
          imageSrc={item.imageSrc}
          price={item.price}
          number={index + 1}
        />
      ))}
      <a href="#" class="btn">
        check out{" "}
      </a>
    </div>
  );
};

export default CartItemsContainer;
