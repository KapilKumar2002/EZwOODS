import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/Layout";
import HomePage from "./pages/home/HomePage";
import CartPage from "./pages/cart/CartPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [{ path: "/", element: <HomePage /> }],
    },
    {
      path: "/",
      element: <Layout />,
      children: [{ path: "/cart", element: <CartPage /> }],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
