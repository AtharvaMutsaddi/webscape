import React, { useState} from "react";
import mylogo from "../assets/mylogo.png";
import { Link } from "react-router-dom";
import CartItemsContainer from "./CartItemsContainer";
const Navbar = ({cart}) => {
  const [isCartVisible, setIsCartVisible] = useState(false);
  const toggleCartVisibility = () => {
    setIsCartVisible(!isCartVisible);
  };
  return (
    <header class="header">
      <a href="#" class="logo">
        <img src={mylogo} class="mylogo" alt="" />
      </a>
      <nav class="navbar">
        <a href="" class="active">
          <Link to="/">Home</Link>
        </a>
        <a href="">
          <Link to="/about">About</Link>
        </a>
        <a href="">
          <Link to="/menu">Menu</Link>
        </a>
        <a href="">
          <Link to="/products">Products</Link>
        </a>
        <a href="">
          <Link to="/reviews">Reviews</Link>
        </a>
        <a href="">Contact</a>
        <a href="">Blog</a>
      </nav>
      <div class="buttons">
        <button id="search-btn">
          <i class="fas fa-search"></i>
        </button>
        <button id="cart-btn" onClick={toggleCartVisibility}>
          <i class="fas fa-shopping-cart"></i>
        </button>
        <button id="menu-btn">
          <i class="fas fa-bars"></i>
        </button>
      </div>

      <div class="search-form">
        <input
          type="text"
          class="search-input"
          id="search-box"
          placeholder="Search"
        />
        <div id="searchfor">
          <i class="fas fa-search"></i>
        </div>
      </div>
      <CartItemsContainer isCartVisible={isCartVisible} cartitems={cart}></CartItemsContainer>
    </header>
  );
};

export default Navbar;
