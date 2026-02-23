import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import { Link } from "react-router-dom";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="card product-card">
      <img src={product.thumbnail} loading="lazy" />
      <h3>{product.title}</h3>
      <p className="price">${product.price}</p>

      <div className="btn-group">
        <Link to={`/product/${product.id}`} className="view-btn">
          View
        </Link>

        <button
          className="cart-btn"
          onClick={() => dispatch(addToCart(product))}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductItem;