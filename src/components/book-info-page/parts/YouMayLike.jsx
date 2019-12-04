import React from "react";
import { connect } from "react-redux";
import { learnMore } from "../../../store/actions/actions";
import { randomNumsWithinRange as randomIndexes } from "../../../randomIndexWithinRange";

const YouMayLike = ({ sameGenreBooks, learnMore }) => {
  //if sameGenreBooks.length is less than five
  //the function will equalize length with range
  let rndIndexesOfFiveBooks = randomIndexes(sameGenreBooks.length, 5);
  let fiveBooks = [];
  rndIndexesOfFiveBooks.forEach(i => fiveBooks.push(sameGenreBooks[i]));

  return (
    <div className="related-books">
      <div className="you-may-like">
        {fiveBooks.map(({ id, img }) => (
          <img
            className="you-may-like_book"
            onClick={() => learnMore(id)}
            id={id}
            key={id}
            src={img}
            alt=""
          />
        ))}
      </div>
    </div>
  );
};

//filtering books with other genres and the opened book
let mapStateToProps = ({ books, openedBookInfo }) => ({
  sameGenreBooks: books.filter(
    ({ genre, id }) =>
      genre === openedBookInfo.genre && id !== openedBookInfo.id
  )
});

export default connect(mapStateToProps, { learnMore })(YouMayLike);
