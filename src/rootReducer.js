import { combineReducers } from "redux";
import books from "./containers/BookForm/reducer";
import bookID from "./containers/BookCards/reducer";


export default combineReducers({
    books,
    bookID,
});