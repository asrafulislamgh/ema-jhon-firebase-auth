import React from "react";
import { useCart } from "../../Hooks/useCart";
import useProducts from "../../Hooks/useProducts";
import Order from "../Order/Order";
import ReviewItems from "../ReviewItems/ReviewItems";
import { clearDb, removeItem } from "../../Hooks/localStorage";
import { useHistory } from "react-router";

const OrderReview = () => {
  const [products] = useProducts();
  const [selectedItem, setSelectedItem] = useCart(products);
  const history = useHistory();
  const handleRemove = (key) => {
    const newSelectedItem = selectedItem.filter(
      (product) => product.key !== key
    );
    setSelectedItem(newSelectedItem);
    removeItem(key);
  };
  const handleOrder = () => {
    history.push("/placeOrder");
    clearDb();
  };
  return (
    <div className="product-container">
      <div>
        {selectedItem.map((product) => (
          <ReviewItems
            key={product.key}
            handleRemove={handleRemove}
            product={product}
          ></ReviewItems>
        ))}
      </div>
      <div className="product-cart">
        <Order selectedItem={selectedItem}>
          <button onClick={handleOrder} className="add-to-cart-btn">
            Place Order
          </button>
        </Order>
      </div>
    </div>
  );
};

export default OrderReview;
