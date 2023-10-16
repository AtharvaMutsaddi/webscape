import React from 'react'
import mylogo from "../assets/mylogo.png" ;
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <header class="header" >
        <a href="#" class="logo">
            <img src={mylogo} class="mylogo" alt=""/>
        </a>
        <nav class="navbar">
            <a href="" class="active"><Link to="/">Home</Link></a>
            <a href=""><Link to="/about">About</Link></a>
            <a href=""><Link to="/menu">Menu</Link></a>
            <a href=""><Link to="/products">Products</Link></a>
            <a href=""><Link to="/reviews">Reviews</Link></a>
            <a href="">Contact</a>
            <a href="">Blog</a>
        </nav>
        <div class="buttons">
            <button id="search-btn">
                <i class="fas fa-search" ></i>
            </button>
            <button id="cart-btn">
                <i class="fas fa-shopping-cart"></i>
            </button>
            <button id="menu-btn">
                <i class="fas fa-bars"></i>
            </button>
        </div>
        <div class="search-form">
            <input type="text" class="search-input" id="search-box" placeholder="Search"/>
            <div id="searchfor">
                <i class="fas fa-search" ></i>
            </div>
            
        </div>
        <div class="cart-items-container">
            <div class="cart-item">
                <i class="fas fa-times"></i>
                <img src="pngwing.com (1).png" alt="menu"/>
                <div class="content">
                    <h3>cart item 01</h3>
                    <div class="price">$15.99 </div>
                </div>
            </div>
            <div class="cart-item">
                <i class="fas fa-times"></i>
                <img src="pngwing.com (2).png" alt="menu"/>
                <div class="content">
                    <h3>cart item 02</h3>
                    <div class="price">$</div>
                </div>
            </div>
            <div class="cart-item">
                <i class="fas fa-times"></i>
                <img src="pngwing.com (3).png" alt="menu"/>
                <div class="content">
                    <h3>cart item 03</h3>
                    <div class="price">$ </div>
                </div>
            </div>
            <div class="cart-item">
                <i class="fas fa-times"></i>
                <img src="pngwing.com (4).png" alt="menu"/>
                <div class="content">
                    <h3>cart item 04</h3>
                    <div class="price">$ </div>
                </div>
            </div>
            <a href="#" class="btn">check out </a>
        </div>
    </header>
  )
}

export default Navbar
