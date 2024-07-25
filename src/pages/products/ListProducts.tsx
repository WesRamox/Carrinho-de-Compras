import { Minus, Plus, ShoppingBag, ShoppingCart } from "lucide-react";
import products from "../../data/products";
import { useState } from "react";
import { useCart } from "../../hooks/useCart";

export interface ProductData {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}


export default function ProductsList() {
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
          <ShoppingCart size={20} />
          {cart.length > 0 && (
            <p className="bg-zinc-900 px-1 rounded absolute right-0 top-9 text-sm font-semibold">{totalItems}</p>
          )}
        </button>
      </div>

      <div className="flex gap-10 items-center justify-center flex-wrap p-10">
        {products.map((product) => (
          <div key={product.id} className="w-fit justify-center flex flex-col">
            <img src={product.image} alt={product.name} className="w-full h-52 object-cover" />
            <h2 className="text-xl text-gray-300 truncate w-52">{product.name}</h2>
            <p className="truncate w-52 text-gray-500">{product.description}</p>
            <p className="text-2xl my-1 font-semibold">R$ {product.price}</p>

            <div className="buttons flex gap-2">
              <button onClick={() => addProductToCart(product)}><ShoppingCart /></button>
              <button className="flex gap-2 items-center justify-center"><ShoppingBag />Comprar agora</button>
            </div>
          </div>
        ))}
      </div>

      {modalCart && (
        <div className="absolute flex flex-col gap-2 top-10 right-0 bg-zinc-900 p-10 z-0 rounded">
          {cart.length > 0 ? (
            <div className="flex flex-col gap-5">
              {cart.map((product) => (
                <div className="flex flex-col" key={product.id}>
                  <img src={product.image} alt={product.name} className="rounded-lg w-16 h-12 object-center" />
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
              <p className="text-xl">Total: R$ {total.toFixed(2)}</p>
            </div>
          ) : (
            <p>Nenhum produto no carrinho</p>
          )}
        </div>
      )}
    </div>
  );
}
