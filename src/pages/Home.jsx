import axios from "axios";
import React, { useEffect, useState } from "react";
import HeroCarousel from "../components/HeroCarousal";
import ProductCard from "../components/ProductCard";


const Home = () => {
  // saare products store karne k liye
  const [products, setProducts] = useState([]);

  // loading state
  const [loading, setLoading] = useState(true);

  // search input state
  const [search, setSearch] = useState("");

  // selected category filter
  const [selectedCategory, setSelectedCategory] = useState("all");

  // sort option: "" | "price-asc" | "price-desc"
  const [sortBy, setSortBy] = useState("");

  // ========================
  // PRODUCTS FETCH
  // ========================
  const fetchProducts = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      setProducts(res.data);
    } catch (error) {
      console.log("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // ========================
  // UNIQUE CATEGORIES NIKALO
  // ========================
  const categories = ["all", ...new Set(products.map((p) => p.category))];

  // ========================
  // FILTER + SEARCH + SORT
  // ========================
  const filteredProducts = products
    .filter((p) => {
      // category filter
      const categoryMatch =
        selectedCategory === "all" || p.category === selectedCategory;
      // search filter (title mein dhundo)
      const searchMatch = p.title
        .toLowerCase()
        .includes(search.toLowerCase());
      return categoryMatch && searchMatch;
    })
    .sort((a, b) => {
      // price ke hisab se sort karo
      if (sortBy === "price-asc") return a.price - b.price;
      if (sortBy === "price-desc") return b.price - a.price;
      return 0; // default — koi sort nahi
    });

  return (
    <div className="container my-5">
<HeroCarousel/>
      {/* Page Heading */}
      <h2 className="fw-bold mb-1">All Products</h2>
      <p className="text-muted mb-4">
        {filteredProducts.length} products found
      </p>

      {/* ======================== */}
      {/* SEARCH + FILTER + SORT   */}
      {/* ======================== */}
      <div className="row g-3 mb-4">

        {/* Search Input */}
        <div className="col-md-5">
          <input
            type="text"
            className="form-control"
            placeholder="🔍 Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Category Dropdown */}
        <div className="col-md-4">
          <select
            className="form-select"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat === "all" ? "All Categories" : cat}
              </option>
            ))}
          </select>
        </div>

        {/* Sort Dropdown */}
        <div className="col-md-3">
          <select
            className="form-select"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="">Sort By</option>
            <option value="price-asc">Price: Low → High</option>
            <option value="price-desc">Price: High → Low</option>
          </select>
        </div>

      </div>

      {/* ======================== */}
      {/* LOADING SPINNER           */}
      {/* ======================== */}
      {loading && (
        <div className="text-center py-5">
          <div className="spinner-border text-primary" role="status" />
          <p className="mt-2 text-muted">Loading products...</p>
        </div>
      )}

      {/* ======================== */}
      {/* NO RESULTS MESSAGE        */}
      {/* ======================== */}
      {!loading && filteredProducts.length === 0 && (
        <div className="text-center py-5">
          <h4>😕 No products found</h4>
          <p className="text-muted">Try a different search or category</p>
        </div>
      )}

      {/* ======================== */}
      {/* PRODUCTS GRID             */}
      {/* ======================== */}
      <div className="row ">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} products={product} />
        ))}
      </div>

    </div>
  );
};

export default Home;