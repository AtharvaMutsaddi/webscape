import React from 'react'
import mylogo from "../assets/mylogo.png" ;
import About from './About';
import Menu from './Menu';
import Products from './Products';
const Home = () => {
  return (
    <>
    <section class="home" id="home">
        <div class="content">
            <div data-aos="slide-right">
                <h3>Fast Food Delivery</h3>
            </div>
        
        <div class="pcontainer" data-aos="fade-right">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt perferendis obcaecati iste voluptatum, quaerat nihil magnam numquam sint? </p>
        </div>
        <a href="#" class="btn ordernowbtn">order now</a>
        
        </div>
        <div class="myimg" data-aos="slide-up">
            <img src={mylogo} alt=""/>
        </div>
    </section>
    <Menu></Menu>
    <Products></Products>
    <About></About>
    </>
  )
}

export default Home
