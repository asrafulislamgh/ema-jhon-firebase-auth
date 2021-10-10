import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Products.css";
import "../../App.css";
import { removeItem } from "../../Hooks/localStorage";
// import { useState } from "react/cjs/react.development";

const Products = (props) => {
  const { key, name, img, seller, price, stock, shipping } = props.product;
  console.log(props);
  // const [disable, setDisable] = useState(false);

  const handleRemoveItem = (id) => {
    removeItem(id);
  };
  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-detail">
        <h3 className="heading-text">{name}</h3>
        <p>
          By: <b>{seller}</b>
        </p>
        <h3>${price}</h3>
        <p>
          Only <b>{stock}</b> item(s) left! Order soon!
        </p>
        <p>By: {shipping}</p>
        <button
          // disabled={disable}
          onClick={() => {
            props.handleProduct(props.product);
            // setDisable(true);
          }}
          className="add-to-cart-btn"
        >
          <FontAwesomeIcon icon={faShoppingCart} />
          Add to Cart
        </button>
        <button
          // disabled={disable}
          onClick={() => {
            handleRemoveItem(key);
          }}
          className="remove-cart-btn"
        >
          Rmove from cart
        </button>
      </div>
    </div>
  );
};

export default Products;
<img src="" alt="" />;
