// ----------------------------------//
// ----------------------------------//
// BOTH CLASS AND FUNCTIONAL COMPONENTS
// BOTH CLASS AND FUNCTIONAL COMPONENTS
// ----------------------------------//
// ----------------------------------//

import React from "react";
import { connect } from "react-redux";
import { openCart } from "../../store/actions/actions";

const Icon = ({ productsCount, favoritesCount, openCart, fav }) => {
  const toggler = fav ? () => {} : openCart;

  return (
    <div
      onClick={toggler}
      style={{ left: `${fav ? 95 : ""}%` }}
      id="cart-container"
    >
      <div className={`icon ${fav ? "favorites" : "cart"}`}></div>
      <p className="counter">{fav ? favoritesCount : productsCount}</p>
    </div>
  );
};

let stateToProps = ({ cart_productsIn, favorites, cartIsOpen }) => ({
  productsCount: cart_productsIn.length,
  favoritesCount: favorites.length,
  cartIsOpen
});

export default connect(stateToProps, { openCart })(Icon);

// import React, { Component } from "react";
// import { connect } from "react-redux";
// import { openCart } from "../../store/actions/actions";

// class Icon extends Component {
//   render() {
//     return (
//       <div
//         onClick={this.props.fav ? this.props.openFavorites : this.props.openCart}
//         style={{ left: `${this.props.fav ? 95 : ""}%` }}
//         id="cart-container"
//       >
//         <div className={`icon ${this.props.fav ? "favorites" : "cart"}`}></div>
//         <p className="counter">
//           {this.props.fav
//             ? this.props.favoritesCount
//             : this.props.productsCount}
//         </p>
//       </div>
//     );
//   }
// }

// function mapStateToProps(state) {
//   return {
//     productsCount: state.cart_productsIn.length,
//     favoritesCount: state.favorites.length,
//     cartIsOpen: state.cartIsOpen
//   };
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     openCart: () => dispatch(openCart()),
//     openFavorites: () => dispatch(openFavorites())
//   };
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Icon);
