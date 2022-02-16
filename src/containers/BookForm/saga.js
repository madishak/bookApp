import 'regenerator-runtime/runtime';
import axios from "axios";
import { call, put, takeEvery, fork } from "redux-saga/effects";
import {
    BOOK_FETCH_REQUEST,
    BOOK_FETCH_SUCCESS,
    BOOK_FETCH_FAILURE,
  } from "../../constants";


function* sendBook(book) {
  try {
    const response = yield call(axios.get, `https://www.googleapis.com/books/v1/volumes?q=${book}&key=AIzaSyDVdec1OaKPW78OEofjzwbVhtI24ThdTDg`);
    const books = yield response;
    yield put({ type: BOOK_FETCH_SUCCESS,  books});
  } catch (error) {
    yield put({ type: BOOK_FETCH_FAILURE, message: error });
  }
}

function* sendBookWatcher() {
  yield takeEvery(BOOK_FETCH_REQUEST, sendBook);
}

export default sendBookWatcher;
