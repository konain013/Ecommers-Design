import React from "react";
import { Routes, Route } from "react-router-dom"; // BrowserRouter hata diya

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Footer from "./components/Footer";
import ProductCard from "./components/ProductCard";
import About from "./pages/About";
import Contact from "./pages/Contact";




const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
      <Footer/>
   
    </>
  );
};

export default App;