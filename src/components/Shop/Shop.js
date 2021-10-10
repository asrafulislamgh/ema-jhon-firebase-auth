import React from "react";
import { Link } from "react-router-dom";
import { addToDb } from "../../Hooks/localStorage";
import { useCart } from "../../Hooks/useCart";
import useProducts from "../../Hooks/useProducts";
import Order from "../Order/Order";
import Products from "../Products/Products";
import "./Shop.css";

const Shop = () => {
  const [products] = useProducts();
  // const [selectedItem, setSelectedItem] = useState([]);
  const [selectedItem, setSelectedItem] = useCart(products);

  const handleProduct = (product) => {
    const exists = selectedItem.find((pd) => pd.key === product.key);
    let newArray = [];
    if (exists) {
      const rest = selectedItem.filter((pd) => pd.key !== product.key);
      exists.quantity = exists.quantity + 1;
      newArray = [...rest, product];
    } else {
      product.quantity = 1;
      newArray = [...selectedItem, product];
    }
    setSelectedItem(newArray);
    addToDb(product.key);
  };
  // useEffect(() => {
  //   if (products.length) {
  //     const savedCart = getStoredCart();
  //     let storedCart = [];
  //     for (const key in savedCart) {
  //       const item = products.find((p) => p.key === key);
  //       if (item) {
  //         const quantity = savedCart[key];
  //         item.quantity = quantity;
  //         storedCart.push(item);
  //       }
  //     }
  //     setSelectedItem(storedCart);
  //     console.log(storedCart);
  //   }
  // }, [products]);

  return (
    <div className="product-container">
      <div>
        {products.map((product) => (
          <Products
            key={product.key}
            product={product}
            handleProduct={handleProduct}
          ></Products>
        ))}
      </div>
      <div className="product-cart">
        <Order selectedItem={selectedItem}>
          <Link to="/orderreview">
            <button className="add-to-cart-btn">Review Order</button>
          </Link>
        </Order>
      </div>
    </div>
  );
};

export default Shop;
