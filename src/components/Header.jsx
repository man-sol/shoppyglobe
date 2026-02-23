import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setSearchTerm } from "../features/cart/cartSlice";

const Header = () => {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <header className="header">
      {/* Logo */}
      <h2 className="logo">ShoppyGlobe</h2>

      {/* Navigation Menu */}
      <nav className="nav-links">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "active-link" : ""
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/cart"
          className={({ isActive }) =>
            isActive ? "active-link" : ""
          }
        >
          🛒 Cart ({totalItems})
        </NavLink>
      </nav>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search products..."
        className="search-input"
        onChange={(e) => dispatch(setSearchTerm(e.target.value))}
      />
    </header>
  );
};

export default Header;