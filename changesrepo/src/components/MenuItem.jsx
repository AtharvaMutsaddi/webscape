import React from "react";

const MenuItem = ({imageSrc,menucat,title,price,addToCart}) => {
  const item={
    imageSrc:imageSrc,
    price: price
  }
  const handleAddToCart = () => {
    addToCart(item);
    alert("Item added to cart successfully")
  };
  return (
    <div class="box">
      <div class="box-head">
        <img
          src={imageSrc}
          alt=""
        />
        <span class="menu-category">{menucat}</span>
        <h3>{title}</h3>
      </div>
      <div class="box-bottom">
        <div class="price">${price}</div>
        <button className='btn ordernowbtn' onClick={handleAddToCart}>Add</button>
      </div>
    </div>
  );
};

export default MenuItem;
