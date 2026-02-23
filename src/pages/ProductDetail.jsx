import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(
          `https://dummyjson.com/products/${id}`
        );

        if (!response.ok) {
          throw new Error("Product not found");
        }

        const data = await response.json();
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  // 🔹 Loading State
  if (loading) {
    return (
      <div className="container">
        <h2>Loading product...</h2>
      </div>
    );
  }

  // 🔹 Error State
  if (error) {
    return (
      <div className="container">
        <h2 style={{ color: "red" }}>Error: {error}</h2>
        <Link to="/">
          <button className="view-btn">⬅ Back to Home</button>
        </Link>
      </div>
    );
  }

  // 🔹 Safety check
  if (!product) return null;

  return (
    <div className="container card">
      <h2>{product.title}</h2>

      <img
        src={product.thumbnail}
        alt={product.title}
        loading="lazy"
        style={{ width: "250px", borderRadius: "10px" }}
      />

      <p style={{ marginTop: "15px" }}>{product.description}</p>

      <h3 style={{ margin: "15px 0" }}>${product.price}</h3>

      <div style={{ display: "flex", gap: "15px" }}>
        <button
          onClick={() => dispatch(addToCart(product))}
          style={{
            padding: "10px 20px",
            backgroundColor: "#16a34a",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          🛒 Add to Cart
        </button>

        <Link to="/">
          <button
            style={{
              padding: "10px 20px",
              backgroundColor: "#facc15",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            ⬅ Back
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductDetail;