import { createContext, ReactNode, useState, useEffect } from "react";
import { ProductData } from "../App";

interface CartItem extends ProductData {
  quantity: number;
}

export interface CartContextProps {
  cart: CartItem[];
  total: number;
  totalItems: number;
  addProductToCart: (product: ProductData) => void;
  removeProductFromCart: (productId: number) => void;
}

type Props = {
  children: ReactNode;
};

export const CartContext = createContext<CartContextProps | undefined>(undefined);

export function CartContextProvider({ children }: Props) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [total, setTotal] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    const newTotal = cart.reduce((accum, item) => accum + item.price * item.quantity, 0);
    setTotal(newTotal);

    const newTotalItems = cart.reduce((accum, item) => accum + item.quantity, 0);
    setTotalItems(newTotalItems);
  }, [cart]);

  function addProductToCart(product: ProductData) {
    setCart((oldState) => {
      const productIndex = oldState.findIndex((item) => item.id === product.id);

      if (productIndex >= 0) {
        const newCart = [...oldState];
        newCart[productIndex].quantity += 1;
        return newCart;
      } else {
        return [...oldState, { ...product, quantity: 1 }];
      }
    });
  }

  function removeProductFromCart(productId: number) {
    setCart((oldState) => {
      const productIndex = oldState.findIndex((item) => item.id === productId);

      if (productIndex >= 0) {
        const newCart = [...oldState];
        if (newCart[productIndex].quantity > 1) {
          newCart[productIndex].quantity -= 1;
        } else {
          newCart.splice(productIndex, 1);
        }
        return newCart;
      }

      return oldState;
    });
  }

  const cartItems = {
    cart,
    total,
    totalItems,
    addProductToCart,
    removeProductFromCart,
  };

  return (
    <CartContext.Provider value={cartItems}>
      {children}
    </CartContext.Provider>
  );
}


