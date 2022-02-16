import {
  BOOK_FETCH_REQUEST,
  BOOK_FETCH_SUCCESS,
  BOOK_FETCH_FAILURE,
} from "../../constants";


export const bookFetchRequest = (book) => ({
    type: BOOK_FETCH_REQUEST,
    book
})

export const bookFetchSuccess = (books) => ({
    type: BOOK_FETCH_SUCCESS,
    books,
})

export const bookFetchFailure = (message) => ({
    type: BOOK_FETCH_FAILURE,
    message,
})