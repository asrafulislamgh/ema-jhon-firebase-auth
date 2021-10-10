import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import { getStoredCart } from "./localStorage";

const useCart = (products) => {
  const [selectedItem, setSelectedItem] = useState([]);
  useEffect(() => {
    if (products.length) {
      const savedCart = getStoredCart();
      let storedCart = [];
      for (const key in savedCart) {
        const item = products.find((p) => p.key === key);
        if (item) {
          const quantity = savedCart[key];
          item.quantity = quantity;
          storedCart.push(item);
        }
      }
      setSelectedItem(storedCart);
    }
  }, [products]);
  return [selectedItem, setSelectedItem];
};

export { useCart };
