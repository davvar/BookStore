import {
  LEARN_MORE,
  CLOSE_LEARN_MORE,
  ADD_TO_CART,
  ADD_TO_FAV,
  OPEN_CART,
  CLOSE_CART
} from "./../constants/action-names";

const openCart = () => ({ type: OPEN_CART });
const closeCart = () => ({ type: CLOSE_CART });

const learnMore = id => ({ type: LEARN_MORE, book_id: id });
const closeLearnMore = () => ({ type: CLOSE_LEARN_MORE });


const addToCart = id => ({ type: ADD_TO_CART, book_id: id });
const addToFav = id => ({ type: ADD_TO_FAV, book_id: id });

const changeBookQuantity = (inc_or_dec, id) => ({
  type: `${inc_or_dec}_BOOK_QUANTITY`,
  book_id: id
});

export {
  openCart,
  closeCart,
  learnMore,
  closeLearnMore,
  addToCart,
  changeBookQuantity,
  addToFav
};
