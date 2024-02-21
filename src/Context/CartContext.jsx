import { createContext, useContext, useState } from "react";

// Create cart context
const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  console.log(cart);

  const addToCart = (product) => {
    setCart([...cart, product]);
    console.log(`added this product ${product.title}`);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}
