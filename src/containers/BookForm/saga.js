import "regenerator-runtime/runtime";
import axios from "axios";
import { call, put, takeEvery, fork } from "redux-saga/effects";
import {
  BOOK_FETCH_REQUEST,
  BOOK_FETCH_SUCCESS,
  BOOK_FETCH_FAILURE,
} from "../../constants";

function* sendBook(request) {
  // console.log(request.book, request.sorter);
  try {
    const response = yield call(
      axios.get,
      `https://www.googleapis.com/books/v1/volumes?q=${request.book}+subject:${
        request.category !== "all" ? request.category : ""
      }&orderBy=${request.sorter}&key=AIzaSyDVdec1OaKPW78OEofjzwbVhtI24ThdTDg`
    );
    // console.log(response.data.items);
    const books = yield response.data.items;
    yield put({ type: BOOK_FETCH_SUCCESS, books});
  } catch (error) {
    yield put({ type: BOOK_FETCH_FAILURE, message: error });
  }
}

function* sendBookWatcher() {
  yield takeEvery(BOOK_FETCH_REQUEST, sendBook);
}

export default sendBookWatcher;
