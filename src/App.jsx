import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import ProductDetails from "./pages/ProductDetails";
import { CartProvider } from "./context/CartProvider";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "shop",
        Component: Shop,
      },
      {
        path: "cart",
        Component: Cart,
      },
      {
        path: "product/:id",
        loader: ({ params }) => {
          return params.id;
        },
        Component: ProductDetails,
      },
    ],
  },
]);

function App() {
  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
}

export default App;
