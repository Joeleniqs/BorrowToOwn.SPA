import React, { useEffect, useState } from "react";

const useCartOperations = () => {
  const [cart, setCart] = useState(null);

  useEffect(() => {
    const cartState = getCart();
    if (cart == null) setCart(cartState || []);
    saveCart();
  }, [cart]);

  const addToCart = (productId) => setCart([...cart, productId]);

  const saveCart = () =>
    localStorage.setItem("BTOwnCart", JSON.stringify(cart));

  const getCart = () => {
    const listOfProducts = JSON.parse(localStorage.getItem("BTOwnCart"))
      ? JSON.parse(localStorage.getItem("BTOwnCart"))
      : [];
    return listOfProducts;
  };

  const clearCart = () => setCart([]);

  return {
    cart,
    saveCart,
    addToCart,
    getCart,
    clearCart,
  };
};

export default useCartOperations;
