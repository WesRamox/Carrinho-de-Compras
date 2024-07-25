import { createBrowserRouter } from "react-router-dom";
import ProductsList from "./pages/products/ListProducts";
import RootLayout from "./pages/RootLayout";
import ShowProduct from "./pages/products/ShowProduct"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <ProductsList /> },
    ],
  },
  {
    path: "product/:id",
    element: <ShowProduct />
  }
]);
