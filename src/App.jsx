import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy } from "react";
import Header from "./components/Header";

const ProductList = lazy(() => import("./pages/ProductList"));
const ProductDetail = lazy(() => import("./pages/ProductDetail"));
const Cart = lazy(() => import("./pages/Cart"));
const Checkout = lazy(() => import("./pages/Checkout"));
const NotFound = lazy(() => import("./pages/NotFound"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <ProductList />
      </>
    ),
  },
  {
    path: "/product/:id",
    element: (
      <>
        <Header />
        <ProductDetail />
      </>
    ),
  },
  {
    path: "/cart",
    element: (
      <>
        <Header />
        <Cart />
      </>
    ),
  },
  {
    path: "/checkout",
    element: (
      <>
        <Header />
        <Checkout />
      </>
    ),
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}