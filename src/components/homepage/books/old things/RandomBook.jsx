import React, { useEffect } from "react";
import LoremIpsum from "./Lorem";
import { learnMore, addToCart } from "../../../store/actions/actions";
import { connect } from "react-redux";
import random_id from '../../../randomI_id';

const RandomBook = ({
  id,
  title,
  author,
  price,
  rating,
  img,
  mousePosition,
  language,
  inCart,
  learnMore,
  addToCart
}) => {
  let BtnText_toCart = inCart ? "In Cart" : "To Cart";
  let BtnStyle_inCart = inCart ? { background: "white", color: "black" } : null;
  return (
    <div
      onMouseLeave={mousePosition}
      onMouseEnter={mousePosition}
      key={random_id()}
      className="book"
    >
      <div className="img">
        <img src={img} alt="" />
      </div>
      <div className="info">
       <div>
          <h3>{author}</h3>
          <h3>${price}</h3>
        </div> 
         <h3>{title}</h3>
        <p>Lang. {language}</p>
        <p>Rating {rating}/10</p>
         <LoremIpsum /> 
        <div className="buttons">
          <button style={BtnStyle_inCart} onClick={() => addToCart(id)}>
            {BtnText_toCart}
          </button>
          <button onClick={() => learnMore(id)}>Learn more . . .</button>
        </div>
      </div>
    </div>
  );
};

export default connect(null, { learnMore, addToCart })(RandomBook);
