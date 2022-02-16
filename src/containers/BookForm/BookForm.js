import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { TextField, MenuItem, Select, Button } from "@mui/material";
import { BOOK_FETCH_REQUEST } from "../../constants";

const BookForm = () => {
  const [book, setBook] = useState("");
  const dispatch = useDispatch();

  const handleChangeBook = (e) => {
    setBook(e.target.value);
    console.log(book);
  };

  const handleSubmit = (e) => {
      e.preventDefault();
    dispatch({ type: BOOK_FETCH_REQUEST, book });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          onChange={handleChangeBook}
          label="book"
          variant="standard"
          required={true}
        />
        <Button type="submit" variant="contained" color="secondary">
          SUBMIT
        </Button>

       
      </form>

      <div>{book}</div>
    </div>
  );
};

export default BookForm;
