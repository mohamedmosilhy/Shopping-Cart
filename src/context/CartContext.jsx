import { createContext } from "react";

const cartContext = createContext({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
  updateQuantity: () => {},
  getTotalItems: () => 0,
  getTotalPrice: () => 0,
});

export default cartContext;
