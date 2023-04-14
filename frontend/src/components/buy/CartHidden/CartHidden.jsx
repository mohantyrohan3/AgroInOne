import React from "react";

/**
 *
 * CartHidden to calculate product price and others
 * For now need to hidden
 * !!Needs to improve!!
 */
const CartHidden = (props) => {
  const cart = props.cart;
  let delivery=0;
  const total = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  if(total>30){
    delivery=3
  }else if(total>1 && total <30){
    delivery=5
  }else{
    delivery=0
  }
  const grandTotal = total + delivery;
  // debugger;
  return (
    <div className="container" style={{ display: "" }}>
      <div className="p-5">
        <p>Item Ordered: {cart.length}</p>
        <p>Total: ${grandTotal.toFixed(2)}</p>
        <small>*Delivery charge ${delivery}</small>
      </div>
    </div>
  );
};

export default CartHidden;