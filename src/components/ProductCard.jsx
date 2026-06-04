import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ products }) => {
  return (
    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 d-flex justify-content-center">
      
      {/* Main Framework Card */}
      <div className="custom-store-card mt-4">
        
        {/* Gray Image Container Box */}
        <div className="custom-img-box">
          <img
            src={products?.image}
            alt={products?.title}
            className="custom-product-img"
          />
        </div>

        {/* Card Content Data */}
        <div className="custom-card-body">
          
          {/* Strictly 2 Lines Title */}
          <h5 className="custom-card-title" title={products?.title}>
            {products?.title}
          </h5>

          {/* Price Block */}
          <p className="custom-card-price">
            ${products?.price}
          </p>
          
          {/* Button Block */}
          <div className="custom-btn-wrapper">
            <Link to={`/products/${products?.id}`} className="custom-btn-primary">
              Add to cart
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductCard;