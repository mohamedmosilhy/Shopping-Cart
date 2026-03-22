import { useState } from "react";
import CartContext from "./CartContext";
import { products } from "../services/products";

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (productId) => {
    const product = products.find((item) => item.id === productId);

    if (!product) {
      return;
    }

    setCartItems((prevCartItems) => {
      const existingItem = prevCartItems.find((item) => item.id === productId);

      if (existingItem) {
        if (existingItem.cartAmount >= existingItem.stockAmount) {
          return prevCartItems;
        }

        return prevCartItems.map((item) =>
          item.id === productId
            ? { ...item, cartAmount: item.cartAmount + 1 }
            : item,
        );
      }

      return [...prevCartItems, { ...product, cartAmount: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCartItems((prevCartItems) => {
      const currentItem = prevCartItems.find((item) => item.id === productId);

      if (!currentItem) {
        return prevCartItems;
      }

      if (currentItem.cartAmount <= 1) {
        return prevCartItems.filter((item) => item.id !== productId);
      }

      return prevCartItems.map((item) =>
        item.id === productId
          ? { ...item, cartAmount: item.cartAmount - 1 }
          : item,
      );
    });
  };

  const updateQuantity = (productId, amount) => {
    const parsedAmount = Number(amount);

    if (Number.isNaN(parsedAmount)) {
      return;
    }

    setCartItems((prevCartItems) => {
      const currentItem = prevCartItems.find((item) => item.id === productId);

      if (!currentItem) {
        return prevCartItems;
      }

      if (parsedAmount <= 0) {
        return prevCartItems.filter((item) => item.id !== productId);
      }

      const clampedAmount = Math.min(parsedAmount, currentItem.stockAmount);

      return prevCartItems.map((item) =>
        item.id === productId ? { ...item, cartAmount: clampedAmount } : item,
      );
    });
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.cartAmount, 0);
  };

  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.cartAmount,
      0,
    );
  };

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    getTotalItems,
    getTotalPrice,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
