import { BOOK_ID } from "../../constants";

const bookID = (state = "", action) => {
  switch (action.type) {
    case BOOK_ID:
      return action.id;
    default:
      return state;
  }
};

export default bookID;
