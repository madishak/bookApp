import {
    BOOK_FETCH_REQUEST,
    BOOK_FETCH_SUCCESS,
    BOOK_FETCH_FAILURE,
  } from "../../constants";


  const books = (state = {}, action) => {
    switch (action.type) {
      case BOOK_FETCH_REQUEST: {
        const { book, category, sorter } = action;
        // console.log(book, category, sorter)
     
        // return { ...state, book, category, sorter };
        return state
      }
      case BOOK_FETCH_SUCCESS: {
        const { books } = action;
        // console.log(books)
     
        return { ...state, books };
      }
      case BOOK_FETCH_FAILURE: {
        const { message } = action;
        return { ...state, message };
      }
      default:
        return state;
    }
  };

  export default books;