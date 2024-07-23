import { Minus, Plus, ShoppingCart } from "lucide-react";
import products from "./data/products";
import { useState } from "react";
import { useCart } from "./hooks/useCart";
// import useCart from "./hooks/useCart";

export interface ProductData {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

function App() {
  const [modalCart, setModalCart] = useState(false);
  const { 
    cart, 
    total, 
    totalItems, 
    addProductToCart, 
    removeProductFromCart 
  } = useCart();

  function handleModalCart() {
    setModalCart(!modalCart);
  }

  return (
    <div>
      <div className="absolute right-2 top-2 z-10">
        <button className="" onClick={handleModalCart}>
          <ShoppingCart />
        </button>
        {cart.length > 0 && (
          <p className="absolute right-2 top-5 font-semibold">{totalItems}</p>
        )}
      </div>

      <div className="flex gap-5 justify-center flex-wrap p-10">
        {products.map((product) => (
          <div key={product.id} className="w-fit">
            <img src={product.image} alt={product.name} className="w-52 h-52 object-cover" />
            <h2 className="text-xl text-gray-300 truncate w-52">{product.name}</h2>
            <p className="truncate w-52 text-gray-500">{product.description}</p>
            <p className="text-2xl my-1 font-semibold">R$ {product.price}</p>
            <button onClick={() => addProductToCart(product)}>Adicionar ao carrinho</button>
          </div>
        ))}
      </div>

      {modalCart && (
        <div className="absolute flex flex-col gap-2 top-10 right-0 bg-zinc-950 p-10 z-0 rounded">
          {cart.length > 0 ? (
            <div>
              {cart.map((product) => (
                <div className="flex flex-col" key={product.id}>
                  <h2 className="text-xl">{product.name}</h2>
                  <div className="flex gap-2 items-center">
                    <p>R$ {product.price}</p>
                    <button 
                      className="p-0 bg-transparent"
                      onClick={() => addProductToCart(product)}
                    >
                      <Plus />
                    </button>
                    <button
                      className="p-0 bg-transparent" 
                      onClick={() => removeProductFromCart(product.id)}
                    >
                      <Minus />
                    </button>
                    <p>{product.quantity}</p>
                  </div>
                </div>
              ))}
              <p>Total: R$ {total.toFixed(2)}</p>
            </div>
          ) : (
            <p>Nenhum produto no carrinho</p>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
