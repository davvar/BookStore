

// ----------------------------------//
// ----------------------------------//
// BOTH CLASS AND FUNCTIONAL COMPONENTS
// BOTH CLASS AND FUNCTIONAL COMPONENTS
// ----------------------------------//
// ----------------------------------//


import React from "react";
import "./book-cart.css";
import { connect } from "react-redux";
import { randomNumsWithinRange as pickingIndexes } from "../../../randomIndexWithinRange";
import Book from "./Book";

const Books = ({ books }) => {
  let notInCart_notOnFav = books.filter(
    ({ inCart, onFavorites }) => !inCart && !onFavorites
  );
  let fiveBooksIndexes = pickingIndexes(notInCart_notOnFav.length, 5);
  let booksToShow = [];
  fiveBooksIndexes.forEach(i => booksToShow.push(notInCart_notOnFav[i]));

  return (
    <div className="books-shelf">
      {booksToShow.map((book, i) => (
        <Book sequence={i} key={book.id} {...book} />
      ))}
      <div className="explore-more"></div>
    </div>
  );
};

export default connect(({ books }) => ({ books }))(Books);


//----------------------------------//
//----------------------------------//
//BOTH CLASS AND FUNCTIONAL COMPONENTS
//BOTH CLASS AND FUNCTIONAL COMPONENTS
//----------------------------------//
//----------------------------------//

// import React, {Component} from "react";
// import "./book-cart.css";
// import { connect } from "react-redux";
// import { randomNumsWithinRange as pickingIndexes } from "../../../randomIndexWithinRange";
// import Book from "./Book";

// class Books extends Component

// const Books = ({ books }) => {
//   let notInCart_notOnFav = books.filter(
//     ({ inCart, onFavorites }) => !inCart && !onFavorites
//   );
//   let fiveBooksIndexes = pickingIndexes(notInCart_notOnFav.length, 5);
//   let booksToShow = [];
//   fiveBooksIndexes.forEach(i => booksToShow.push(notInCart_notOnFav[i]));

//   return (
//     <div className="books-shelf">
//       {booksToShow.map((book, i) => (
//         <Book sequence={i} key={book.id} {...book} />
//       ))}
//       <div className="explore-more"></div>
//     </div>
//   );
// };

// export default connect(({ books }) => ({ books }))(Books);