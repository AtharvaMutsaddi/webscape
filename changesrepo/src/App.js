import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import the necessary components from React Router DOM
import Navbar from "./components/Navbar";
import './App.css'
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Menu from "./pages/Menu";
import Reviews from "./pages/Reviews";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          {/* Define your routes here using the Route component */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/reviews" element={<Reviews />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
