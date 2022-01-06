import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";

const Navbar = ({ cart }) => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.qty;
    });

    setCartCount(count);
  }, [cart, cartCount]);

  return (
      <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
          <Link to="/">
            <h3>Home</h3>
          </Link>
          <form class="d-flex">
          <Link to="/cart">
            <h3 >Cart - {cartCount}</h3>
          </Link>
          </form>
        </div>
      </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Navbar);
