import { books } from "../../datas/datas";
import {
  OPEN_CART,
  CLOSE_CART,
  ADD_TO_CART,
  LEARN_MORE,
  CLOSE_LEARN_MORE,
  INC_BOOK_QUANTITY,
  DEC_BOOK_QUANTITY,
  ADD_TO_FAV
} from "./../constants/action-names";

let initialState = {
  books,
  cartIsOpen: false,
  openBookInfo: false,
  openedBookInfo: null,
  cart_productsIn: [],
  cart_sumOfProducts: 0,
  favorites: [],
  imageToFullscreen: false
};

let mainPageReducer = (state = initialState, action) => {
  let {
    openedBookInfo,
    books,
    cart_productsIn,
    cart_sumOfProducts,
    favorites
  } = state;

  switch (action.type) {
    case OPEN_CART:
      return { ...state, cartIsOpen: true };
    //----------------------------------------------------------------------//
    case CLOSE_CART:
      return { ...state, cartIsOpen: false };
    //----------------------------------------------------------------------//
    case ADD_TO_CART:
      if (books.some(({ id, inCart }) => id === action.book_id && inCart))
        return state;

      let book = books.find(({ id }) => id === action.book_id);
      book.inCart = true;
      book.quantity = 1;
      let changedBooks = books.map(book => {
        if (book.id === action.book_id) book.inCart = true;
        return book;
      });
      cart_productsIn = [book, ...cart_productsIn];
      cart_sumOfProducts += book.calculatingTotalSumOfBook();

      return {
        ...state,
        cart_productsIn,
        cart_sumOfProducts,
        books: changedBooks
      };
    //----------------------------------------------------------------------//
    case INC_BOOK_QUANTITY:
      cart_productsIn = cart_productsIn.map(book => {
        if (book.id === action.book_id) book.quantity += 1;
        return book;
      });
      return { ...state, cart_productsIn };
    //----------------------------------------------------------------------//
    case DEC_BOOK_QUANTITY:
      cart_productsIn = cart_productsIn.map(book => {
        if (book.id === action.book_id) book.quantity -= 1;
        return book;
      });
      return { ...state, cart_productsIn };
    //----------------------------------------------------------------------//
    case LEARN_MORE:
      books.forEach(
        book => book.id === action.book_id && (openedBookInfo = { ...book })
      );
      return { ...state, openedBookInfo, openBookInfo: true };
    //----------------------------------------------------------------------//
    case CLOSE_LEARN_MORE:
      return { ...state, openBookInfo: false, openedBookInfo: null };
    //----------------------------------------------------------------------//
    case ADD_TO_FAV:

      if (books.some(({ id, onFavorites }) => id === action.book_id && onFavorites))
        return state;
      
      let newBooks = books.map(book => {
        if (book.id === action.book_id) book.onFavorites = true;
        return book;
      });
      let newFavorites = [
        books.find(({ id }) =>   id === action.book_id ),
        ...favorites
      ];
      
      return { ...state, books: newBooks, favorites: newFavorites };
    //----------------------------------------------------------------------//
    default:
      return state;
  }
};

export { mainPageReducer };
