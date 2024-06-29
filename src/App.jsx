import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/Layout";
import HomePage from "./pages/home/HomePage";
import CartPage from "./pages/cart/CartPage";
import ProductPage from "./pages/product/ProductPage";
import ProductDetail from "./pages/detail/ProductDetail";
import AboutPage from "./pages/about/AboutPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "/product", element: <ProductPage /> },
        { path: "/cart", element: <CartPage /> },
        { path: "/product/1", element: <ProductDetail /> },
        { path: "/about", element: <AboutPage /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
