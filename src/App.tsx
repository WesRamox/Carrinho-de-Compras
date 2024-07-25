import { RouterProvider } from "react-router-dom";
import { CartContextProvider } from "./contexts/CartContext";
import { router } from "./router";

export default function App() {
  return(
    <CartContextProvider> 
        <RouterProvider router={router} />
    </CartContextProvider>
  )
}
