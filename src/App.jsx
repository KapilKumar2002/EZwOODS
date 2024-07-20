import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/Layout";
import HomePage from "./pages/home/HomePage";
import CartPage from "./pages/cart/CartPage";
import ProductPage from "./pages/product/ProductPage";
import WishListPage from "./pages/wishlist/WishListPage";
import AboutPage from "./pages/about/AboutPage";
import ProductDetail from "./pages/detail/ProductDetail";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ErrorPage from "./pages/error/Error";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "/product", element: <ProductPage /> },
        { path: "/cart", element: <CartPage /> },
        { path: "/wishlist", element: <WishListPage /> },
        { path: "/product/1", element: <ProductDetail /> },
        { path: "/about", element: <AboutPage /> },
      ],
    },
    {
      path: "/login",
      element: <Login />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/register",
      element: <Register />,
      errorElement: <ErrorPage />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
