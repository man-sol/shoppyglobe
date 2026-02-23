import { useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseQty,
  decreaseQty,
} from "../features/cart/cartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="cart-card">
      <div className="cart-info">
        <h3>{item.title}</h3>
        <p className="cart-price">${item.price}</p>
      </div>

      <div className="cart-controls">
        <button
          className="qty-btn"
          onClick={() => dispatch(decreaseQty(item.id))}
        >
          -
        </button>

        <span className="quantity">{item.quantity}</span>

        <button
          className="qty-btn"
          onClick={() => dispatch(increaseQty(item.id))}
        >
          +
        </button>

        <button
          className="remove-btn"
          onClick={() => dispatch(removeFromCart(item.id))}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;