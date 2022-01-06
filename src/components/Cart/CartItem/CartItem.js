import React, { useState } from "react";
import { connect } from "react-redux";
import {
  adjustItemQty,
  removeFromCart,
} from "../../../redux/Shopping/shopping-actions";

const CartItem = ({ item, adjustQty, removeFromCart }) => {
  const [input, setInput] = useState(item.qty);

  const onChangeHandler = (e) => {
    setInput(e.target.value);
    adjustQty(item.id, e.target.value);
  };

  return (

    <div class="card mb-3">
    <div class="row g-0">
      <div class="col-md-4">
        <img src={item.image} class="img-fluid rounded-start" alt="..."/>
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{item.title}</h5>
          <h5 class="card-title"><b>$ {item.price}</b></h5>
          <p class="card-text">{item.description}</p>
            <form class="row g-3">
              <div class="col-auto">
              <label for="staticEmail2" class="visually-hidden">Quantity</label>
                    <input type="number" min="0" class="form-control form-control-color" 
                    value={input} onChange={onChangeHandler} ></input>
              </div>
              <div class="col-auto">
                <button type="submit" onClick={() => removeFromCart(item.id)} class="btn btn-danger mb-3">Remove</button>
              </div>
            </form>
        </div>
      </div>
    </div>
  </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    adjustQty: (id, value) => dispatch(adjustItemQty(id, value)),
    removeFromCart: (id) => dispatch(removeFromCart(id)),
  };
};

export default connect(null, mapDispatchToProps)(CartItem);
