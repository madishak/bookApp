import { all } from "redux-saga/effects";
import sendBookWatcher from './containers/BookForm/saga';

export default function* rootSaga() {
    yield all([
        sendBookWatcher(),
    ])
}