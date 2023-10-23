import React from "react";

const CartItem = ({imageSrc,price,number}) => {
  return (
    <div class="cart-item">
      <i class="fas fa-times"></i>
      <img src={imageSrc} alt="menu" />
      <div class="content">
        <h3>cart item {number}</h3>
        <div class="price">Price: ${price}</div>
      </div>
    </div>
  );
};

export default CartItem;
