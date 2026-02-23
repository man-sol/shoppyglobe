import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="notfound-container">
      <h1 className="error-code">404</h1>
      <h2 className="error-title">Oops! Page Not Found</h2>
      <p className="error-message">
        The page you are looking for does not exist or has been moved.
      </p>

      <Link to="/" className="home-btn">
        🔙 Back to Home
      </Link>
    </div>
  );
};

export default NotFound;