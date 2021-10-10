import React from "react";
import "./Order.css";
import "../../App.css";

const Order = (props) => {
  let totalItem = 0;
  let total = 0;
  for (const product of props.selectedItem) {
    product.quantity = product.quantity ? product.quantity : 1;
    total = total + product.price * product.quantity;
    totalItem = totalItem + product.quantity;
  }
  const shippingCharge = total ? 30 : 0;
  const tax = (total + shippingCharge) * 0.2;
  const grandTotal = total + shippingCharge + tax;

  return (
    <div>
      <h3>Order Summery</h3>
      <h5>Item Order: {totalItem}</h5>
      <ul>
        <li>
          Price: <b>{total.toFixed(2)}</b>
        </li>
        <li>
          Shipping: <b>{shippingCharge}</b>
        </li>
        <li>
          TAX: <b>{tax.toFixed(2)}</b>
        </li>
        <li>
          <h3>Order Total: {grandTotal.toFixed(2)}</h3>
        </li>
        {props.children}
      </ul>
      <div>
        <ul></ul>
      </div>
    </div>
  );
};

export default Order;
