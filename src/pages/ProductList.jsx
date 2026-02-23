import useProducts from "../hooks/useProducts";
import ProductItem from "../components/ProductItem";
import { useSelector } from "react-redux";

const ProductList = () => {
  const { products, error } = useProducts();
  const searchTerm = useSelector(state => state.cart.searchTerm);

  const filtered = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (error) return <h2>{error}</h2>;

  return (
    <div className="container grid">
      {filtered.map(product => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;