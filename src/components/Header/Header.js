import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <img className="logo" src={Logo} alt="" />
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/orderreview">Order Review</Link>
            </li>
            <li>
              <Link to="/inventory">Manage Inventory</Link>
            </li>
          </ul>
        </nav>
        <div className="search-bar">
          <input type="search" placeholder="Search your Products" />
          <button>Search</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
