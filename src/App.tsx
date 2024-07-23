import { Minus, Plus, ShoppingCart } from "lucide-react";
import products from "./data/products";
import { useState } from "react";

interface ProductData {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

interface CartItem extends ProductData {
  quantity: number;
}

function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [modalCart, setModalCart] = useState(false);
  const [total, setTotal] = useState(0);
  
  function addProductToCart(product: ProductData) {
    setCart((oldState) => {
      const productIndex = oldState.findIndex((item) => item.id === product.id);

      if (productIndex >= 0) {
        // Produto já existe no carrinho, incrementa a quantidade
        const newCart = [...oldState];
        newCart[productIndex].quantity += 1;
        
        setTotal(newCart.reduce((accum, item) => accum + item.price * item.quantity, 0));
        return newCart;
      } else {
        // Produto novo no carrinho
        const newCart = [...oldState, { ...product, quantity: 1 }];
        setTotal(newCart.reduce((accum, item) => accum + item.price * item.quantity, 0));
        return newCart;
      }
    });

    const totalProducts = cart.reduce((accum, item) => accum + item.quantity)
  }

  function removeProductFromCart(productId: number) {
    setCart((oldState) => {
      const productIndex = oldState.findIndex((item) => item.id === productId);

      if (productIndex >= 0) {
        const newCart = [...oldState];
        if (newCart[productIndex].quantity > 1) {
          // Decrementa a quantidade
          newCart[productIndex].quantity -= 1;
        } else {
          // Remove o produto do carrinho
          newCart.splice(productIndex, 1);
        }
        setTotal(newCart.reduce((accum, item) => accum + item.price * item.quantity, 0));
        return newCart;
      }

      return oldState;
    });
  }

  function handleModalCart() {
    setModalCart(!modalCart);
  }

  function handleClick(product: ProductData) {
    addProductToCart(product);
  }

  return (
    <>
      <div className="absolute right-2 top-2 z-10">
        <button className="" onClick={handleModalCart}>
          <ShoppingCart />
        </button>
        {cart.length > 0 && (
          <p className="absolute right-2 top-5 font-semibold">{cart.length}</p>
        )}
      </div>

      <div className="flex gap-5 justify-center flex-wrap p-10">
        {products.map((product) => (
          <div key={product.id} className="w-fit">
            <img src={product.image} alt={product.name} className="w-52 h-52 object-cover" />
            <h2 className="text-xl text-gray-300 truncate w-52">{product.name}</h2>
            <p className="truncate w-52 text-gray-500">{product.description}</p>
            <p className="text-2xl my-1 font-semibold">R$ {product.price}</p>
            <button onClick={() => handleClick(product)}>Adicionar ao carrinho</button>
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
                    <button className="p-0 bg-transparent" onClick={() => addProductToCart(product)}>
                      <Plus />
                    </button>
                    <button className="p-0 bg-transparent" onClick={() => removeProductFromCart(product.id)}>
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
    </>
  );
}

export default App;
