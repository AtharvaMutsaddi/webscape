import React,{useState} from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import the necessary components from React Router DOM
import Navbar from "./components/Navbar";
import './App.css'
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Menu from "./pages/Menu";
import Reviews from "./pages/Reviews";

function App() {
  const [cart,setCart]=useState([
  ])
  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <Router>
      <div className="App">
        <Navbar cart={cart}/>
        <Routes>
          {/* Define your routes here using the Route component */}
          <Route path="/" element={<Home addToCart={addToCart}/>} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products addToCart={addToCart}/>} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/reviews" element={<Reviews />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
