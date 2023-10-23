import React from "react";

const CartItem = ({imageSrc,price,number,removeFromCart}) => {
  const index=number-1
  const handleremoveFromCart= ()=>{
    removeFromCart(index)
  }
  return (
    <div class="cart-item">
      <i class="fas fa-times" onClick={handleremoveFromCart}></i>
      <img src={imageSrc} alt="menu" />
      <div class="content">
        <h3>cart item {number}</h3>
        <div class="price">Price: $ {price}</div>
      </div>
    </div>
  );
};

export default CartItem;
