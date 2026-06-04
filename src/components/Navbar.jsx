import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = ({ cartCount }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black shadow-sm py-3">
      <div className="container">
        
        {/* Left Side: Brand Logo */}
        <Link className="navbar-brand fw-bold fs-4 text-white" to="">
          E.stoRe
        </Link>

        {/* Mobile Hamburger Toggle Button */}
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#ecommerceNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Right Side: All 4 Pages Aligned Together */}
        <div className="collapse navbar-collapse" id="ecommerceNavbar">
          {/* ms-auto saare links ko zbardasti right side par push kar dega */}
          <ul className="navbar-nav ms-auto align-items-center gap-3">
            
            <li className="nav-item">
              <NavLink className="nav-link px-2" to="/">
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link px-2" to="/about">
                About
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link px-2" to="/contact">
                Contact
              </NavLink>
            </li>

          
            {/* 4th Page: Premium Dynamic Cart Button Link */}
            <li className="nav-item ms-lg-2">
              <Link 
                to="/cart" 
                className="btn btn-light position-relative px-4 fw-semibold rounded-pill"
                style={{ fontSize: "0.9rem" }}
              >
                Cart 🛒
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {cartCount}
                </span>
              </Link>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;