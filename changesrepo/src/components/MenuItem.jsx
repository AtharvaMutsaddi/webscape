import React from "react";

const MenuItem = ({imageSrc,menucat,title,price}) => {
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
        <a href="#" class="btn">
          <i class="fas fa-shopping-cart"></i>
        </a>
      </div>
    </div>
  );
};

export default MenuItem;
