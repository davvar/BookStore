
//----------------------------------//
//----------------------------------//
//BOTH CLASS AND FUNCTIONAL COMPONENTS
//BOTH CLASS AND FUNCTIONAL COMPONENTS
//----------------------------------//
//----------------------------------//

import React from "react";
import { learnMore, addToCart, addToFav } from "../../../store/actions/actions";
import { connect } from "react-redux";

const BookLayer = ({
  id,
  addToCart,
  learnMore,
  addToFav,
  movingToCart,
  movingToFavs
}) => {


  const callingInOrder = (func1, func2) => {
    func1();
    setTimeout(() => func2(id), 1200);
  };

  return (
    <div className="book-layer">
      <div onClick={() => learnMore(id)} className="more-info"></div>
      <div className="btns">
        <div
          onClick={() => callingInOrder(movingToCart, addToCart)}
          className="btn to-cart"
        ></div>
        <div
          onClick={() => callingInOrder(movingToFavs, addToFav)}
          className="btn to-fav"
        ></div>
      </div>
    </div>
  );
};

export default connect(null, { learnMore, addToCart, addToFav })(BookLayer);

// import React, { Component } from "react";
// import { learnMore, addToCart, addToFav } from "../../../store/actions/actions";
// import { connect } from "react-redux";

// class BookLayer extends Component {


//   callingInOrder = (func1, func2) => {
//     func1();
//    return setTimeout(() => func2(this.props.id), 1200);
//   };

//   render() {
//     return (
//       <div className="book-layer">
//         <div
//           onClick={() => this.props.learnMore(this.props.id)}
//           className="more-info"
//         ></div>
//         <div className="btns">
//           <div
//             onClick={() =>
//               this.callingInOrder(
//                 this.props.movingToCart,
//                 this.props.addToCart
//               )
//             }
//             className="btn to-cart"
//           ></div>
//           <div
//             onClick={() =>
//               this.callingInOrder(
//                 this.props.movingToFavs,
//                 this.props.addToFav
//               )
//             }
//             className="btn to-fav"
//           ></div>
//         </div>
//       </div>
//     );
//   }
// }


// export default connect(null, { learnMore, addToCart, addToFav })(BookLayer);
