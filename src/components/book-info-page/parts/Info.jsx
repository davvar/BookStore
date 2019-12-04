import React, { Fragment } from "react";
import random_id from "./../../../randomI_id";
import { addToCart, addToFav } from "../../../store/actions/actions";
import { connect } from "react-redux";

const Info = props => {
  const { id, addToCart, addToFav, cart_productsIn, favorites } = props;

  let infos = ["Title", "Author", "Price", "Rating", "Language", "Genre"];
  let style = { display: "flex", justifyContent: "space-between" };

  let isProductInCart = cart_productsIn.some(prod => prod.id === id);
  let cartBtnTxt = isProductInCart ? "In Cart" : "Add to Cart";

  let isProductInFav = favorites.some(prod => prod.id === id);
  let likeBtnTxt = isProductInFav ? '': 1 ;


  return (
    <div className="book-info">
      {infos.map(info => (
        <Fragment key={random_id()}>
          <div style={style}>
            <h3 style={{ flexBasis: "20%", textAlign: "left" }}>{info}:</h3>
            <h3>
              {info === "Price" ? <i className="fa fa-dollar"></i> : ""}{" "}
              {props[info.toLowerCase()]}
              {info === "Rating" ? " / 10" : ""}
            </h3>
          </div>
          <hr />
        </Fragment>
      ))}
      <div className="book-info-btns">
        <div onClick={() => addToCart(id)} className="btn to-cart">
          <span>{cartBtnTxt}</span>
        </div>
        <div onClick={() => addToFav(id)} className="btn to-fav">
          <span >Add to Liked</span>
        </div>
      </div>
    </div>
  );
};

export default connect(
  ({ cart_productsIn, favorites }) => ({ cart_productsIn, favorites }),
  {
    addToCart,
    addToFav
  }
)(Info);
