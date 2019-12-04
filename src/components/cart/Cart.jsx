import React, { useState, useEffect } from "react";
import "./cart.css";
import { connect } from "react-redux";
import { closeCart } from "../../store/actions/actions";

const Cart = ({ closeCart }) => {
  let [position, setPosition] = useState(1920);

  useEffect(() => {
    setTimeout(() => setPosition(1920 - 550));
  }, []);

  const closingCartWithDelay = () => (
    setPosition(1920), setTimeout(closeCart, 400)
  );

  return (
    <div style={{ transform: `translateX(${position}px)` }} className="Cart">
      <i onClick={closingCartWithDelay} className="fa fa-close"></i>
      {/* <div className="cart-content">
        <h1>Cart</h1>
        <hr /> 
        <div className="cart-products">
          <p>prod1</p>
        </div>
        <div className="total">
          <p>Total:</p>
          <p>$200</p>
        </div>
        <div className="cart-buttons">
          <button>Buy</button>
        </div>
      </div> */}
    </div>
  );
};

export default connect(null, { closeCart })(Cart);
