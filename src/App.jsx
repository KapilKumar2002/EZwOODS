import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/Layout";
import HomePage from "./pages/home/HomePage";
import CartPage from "./pages/cart/CartPage";
import ProductPage from "./pages/product/ProductPage";
import WishListPage from "./pages/wishlist/WishListPage";
import AboutPage from "./pages/about/AboutPage";
import ProductView from "./pages/detail/productCarousel/ProductView";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "/product", element: <ProductPage /> },
        { path: "/cart", element: <CartPage /> },
        { path: "/wishlist", element: <WishListPage /> },
        { path: "/product/1", element: <ProductView /> },
        { path: "/about", element: <AboutPage /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
