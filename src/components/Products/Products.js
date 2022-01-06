import React from "react";
import { connect } from "react-redux";

import Product from "./Product/Product";

const Products = ({ products }) => {
  return (
    <div class="container">
    <div class="row row-cols-1 row-cols-md-4 g-4">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
     </div>
     </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
  };
};

export default connect(mapStateToProps)(Products);
