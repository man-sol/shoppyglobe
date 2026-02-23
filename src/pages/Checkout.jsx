import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlePlaceOrder = () => {
    alert("Order Placed!");
    dispatch(clearCart());
    navigate("/"); // redirect to Home
  };

  return (
    <div className="container checkout-card">
      <h2>Checkout</h2>

      {/* Dummy form */}
      <form className="checkout-form">
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <input type="text" placeholder="Address" required />
      </form>

      {/* Cart Summary */}
      <div className="checkout-summary">
        {cartItems.map((item) => (
          <div key={item.id}>
            {item.title} - {item.quantity} x ${item.price}
          </div>
        ))}
        <h3>
          Total: $
          {cartItems.reduce(
            (total, item) => total + item.price * item.quantity,
            0
          )}
        </h3>

        {/* Place Order Button */}
        <button className="place-order-btn" onClick={handlePlaceOrder}>
          Place Order
        </button>
      </div>
    </div>
  );
};

export default Checkout;