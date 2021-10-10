import React from "react";

const ReviewItems = (props) => {
  const { handleRemove } = props;
  const { key, name, seller, price, stock, shipping, quantity } = props.product;

  console.log(props.product);
  return (
    <div className="product">
      <div className="product-detail">
        <h3 className="heading-text">{name}</h3>
        {/* {props.product ? props.product : <h3>Nothing</h3>} */}
        <p>
          By: <b>{seller}</b>
        </p>
        <h3>${price}</h3>
        <p>
          Only <b>{stock}</b> item(s) left! Order soon!
        </p>
        <p>Shipping: {shipping}</p>
        <p>Items: {quantity}</p>

        <button onClick={() => handleRemove(key)} className="remove-cart-btn">
          Remove
        </button>
      </div>
    </div>
  );
};

export default ReviewItems;
