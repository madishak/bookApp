import {
  BOOK_FETCH_REQUEST,
  BOOK_FETCH_SUCCESS,
  BOOK_FETCH_FAILURE,
} from "../../constants";


export const bookFetchRequest = (book, category, sorter) => ({
    type: BOOK_FETCH_REQUEST,
    book,
    category,
    sorter,
})

export const bookFetchSuccess = (books) => ({
    type: BOOK_FETCH_SUCCESS,
    books,
})

export const bookFetchFailure = (message) => ({
    type: BOOK_FETCH_FAILURE,
    message,
})