import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/Layout";
import HomePage from "./pages/home/HomePage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [{ path: "/", element: <HomePage /> }],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
