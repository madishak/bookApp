import {
    BOOK_FETCH_REQUEST,
    BOOK_FETCH_SUCCESS,
    BOOK_FETCH_FAILURE,
  } from "../../constants";


  const books = (state = {}, action) => {
    switch (action.type) {
      case BOOK_FETCH_REQUEST: {
        const { book } = action;
        console.log(book)
     
        return { ...state, book };
      }
      case BOOK_FETCH_SUCCESS: {
        const { books } = action;
        console.log(books)
     
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