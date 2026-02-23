import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
  const items = useSelector((state) => state.cart.items);
  const navigate = useNavigate();

  return (
    <div className="container cart-container">
      <h2>Your Cart</h2>

      {items.length === 0 && (
        <p style={{ marginTop: "20px", color: "#ccc" }}>Cart is empty</p>
      )}

      <div className="cart-items">
        {items.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>

      {items.length > 0 && (
        <div className="checkout-section">
          <button
            className="proceed-btn"
            onClick={() => navigate("/checkout")}
          >
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;