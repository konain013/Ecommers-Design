import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const getProduct = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://fakestoreapi.com/products/${id}`
      );
      setProduct(response.data);
    } catch (error) {
      console.log(error);
      alert("Something went wrong while fetching product details.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProduct();
  }, [id]);

  return (
    <div className="container my-5">
      {loading || !product ? (
        /* Matching Loader */
        <div className="custom-detail-loader">
          <div className="spinner-border" role="status" />
          <p className="mt-2 text-muted">Loading product details...</p>
        </div>
      ) : (
        <div className="row align-items-center g-5">
          
          {/* Left Side: Product Image (Fixed Premium Gray Box) */}
          <div className="col-md-5 d-flex justify-content-center">
            <div className="custom-detail-img-box">
              <img
                src={product.image}
                alt={product.title}
                className="custom-detail-img"
              />
            </div>
          </div>

          {/* Right Side: Product Info */}
          <div className="col-md-7">
            <div className="custom-detail-body">
              <span className="custom-detail-badge">{product.category}</span>
              <h2 className="custom-detail-title">{product.title}</h2>
              
              <div className="custom-detail-rating">
                ⭐ {product.rating?.rate}{" "}
                <span className="text-muted">({product.rating?.count} reviews)</span>
              </div>

              <h3 className="custom-detail-price">${product.price}</h3>
              
              <p className="custom-detail-desc">{product.description}</p>
              
              {/* Matched Buttons Layout */}
              <div className="custom-detail-btn-group">
                <button className="custom-btn-outline">
                  Add to Cart 🛒
                </button>
                <button className="custom-btn-filled">
                  Buy Now
                </button>
              </div>
            </div>
          </div>

        </div>
      )}
    </div>
  );
};

export default ProductDetails;