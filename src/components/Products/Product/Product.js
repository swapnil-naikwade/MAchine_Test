import React from "react";
import { Link } from "react-router-dom";
// import styles from "./Product.module.css";

// Redux
import { connect } from "react-redux";
import {
  loadCurrentItem,
  addToCart,
} from "../../../redux/Shopping/shopping-actions";

const Product = ({ product, addToCart, loadCurrentItem }) => {
  return (
  <>
  <div class="col">
    <div class="card h-100">
      <img src={product.image} class="card-img-top" alt="..." height="200"/>
      <div class="card-body">
        <h5 class="card-title">{product.title}</h5>
        <p class="card-text">{product.description.substr(0,50)+'...'}</p>
        <a href="#" onClick={() => addToCart(product.id)} class="btn btn-primary">Add To Cart</a>
      </div>
    </div>
  </div>
  </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
    loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
  };
};

export default connect(null, mapDispatchToProps)(Product);
