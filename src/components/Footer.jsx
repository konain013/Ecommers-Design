import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#1a1a2e" }} className="text-light pt-5 pb-3 mt-5">
      <div className="container">
        <div className="row g-4 mb-4">

          {/* Column 1 — Brand */}
          <div className="col-md-4">
            <h5 className="fw-bold mb-3 text-black">🛍️ E.stoRe</h5>
            <p style={{ color: "#aaa", fontSize: "0.9rem" }}>
              Your one-stop shop for everything. Quality products, fast delivery,
              and the best prices — guaranteed.
            </p>
            {/* Social Icons */}
            <div className="d-flex gap-3 mt-3">
              <a href="#" className="text-decoration-none fs-5">📘</a>
              <a href="#" className="text-decoration-none fs-5">🐦</a>
              <a href="#" className="text-decoration-none fs-5">📸</a>
              <a href="#" className="text-decoration-none fs-5">▶️</a>
            </div>
          </div>

          {/* Column 2 — Quick Links */}
          <div className="col-md-2">
            <h6 className="fw-bold mb-3 text-uppercase" style={{ letterSpacing: "1px", color: "black" }}>
              Quick Links
            </h6>
            <ul className="list-unstyled">
              {[
                { name: "Home", path: "/" },
                { name: "Products", path: "/" },
                { name: "About", path: "/about" },
                { name: "Contact", path: "/contact" },
              ].map((item) => (
                <li key={item.name} className="mb-2">
                  <Link
                    to={item.path}
                    className="text-decoration-none"
                    style={{ color: "#aaa", fontSize: "0.9rem", transition: "color 0.2s" }}
                    onMouseEnter={(e) => (e.target.style.color = "black")}
                    onMouseLeave={(e) => (e.target.style.color = "#aaa")}
                  >
                    → {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Categories */}
          <div className="col-md-2">
            <h6 className="fw-bold mb-3 text-uppercase" style={{ letterSpacing: "1px", color: "black" }}>
              Categories
            </h6>
            <ul className="list-unstyled">
              {["Electronics", "Jewelery", "Men's Clothing", "Women's Clothing"].map((cat) => (
                <li key={cat} className="mb-2">
                  <span style={{ color: "#aaa", fontSize: "0.9rem" }}>→ {cat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Newsletter */}
          <div className="col-md-4">
            <h6 className="fw-bold mb-3 text-uppercase" style={{ letterSpacing: "1px", color: "black" }}>
              Newsletter
            </h6>
            <p style={{ color: "#aaa", fontSize: "0.85rem" }}>
              Subscribe to get latest deals and offers directly in your inbox.
            </p>
            <div className="input-group mb-3">
              <input
                type="email"
                className="form-control border-0"
                placeholder="Enter your email..."
                style={{ backgroundColor: "#16213e", color: "#fff" }}
              />
              <button
                className="btn btn-danger px-3"
                style={{ backgroundColor: "black", border: "none" }}
              >
                Subscribe
              </button>
            </div>
            {/* Trust badges */}
            <div className="d-flex gap-2 flex-wrap">
              {["🔒 Secure", "🚚 Fast Delivery", "↩️ Easy Returns"].map((badge) => (
                <span
                  key={badge}
                  className="badge"
                  style={{ backgroundColor: "#16213e", color: "#aaa", fontSize: "0.75rem", padding: "6px 10px" }}
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Divider */}
        <hr style={{ borderColor: "#333" }} />

        {/* Bottom Bar */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
          <p className="mb-0" style={{ color: "#aaa", fontSize: "0.85rem" }}>
            © {new Date().getFullYear()} <span style={{ color: "#0000" }}>ShopReact</span>. All rights reserved.
          </p>
          <div className="d-flex gap-3 mt-2 mt-md-0">
            {["Privacy Policy", "Terms of Service", "Support"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-decoration-none"
                style={{ color: "#aaa", fontSize: "0.85rem" }}
                onMouseEnter={(e) => (e.target.style.color = "#140104")}
                onMouseLeave={(e) => (e.target.style.color = "#aaa")}
              >
                {item}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;