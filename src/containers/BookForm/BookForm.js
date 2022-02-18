import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { TextField, MenuItem, Select, Button, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { BOOK_FETCH_REQUEST } from "../../constants";

const useStyles = makeStyles({
  wrapper: {
    display: "flex",
    justifyContent: "center",
    flexFlow: "wrap row",
  },
  inner: {
    display: "flex",
    justifyContent: "center",
    flexFlow: "wrap row",
    alignItems: "center",
    padding: "15px 20px 15px 0",
  },
  button: {
    padding: "10px",
  },
  caption: {
    padding: "0 15px 0 0",
  }
});

const BookForm = () => {
  const [book, setBook] = useState("");
  const [category, setCategory] = useState("all");
  const [sorter, setSorter] = useState("relevance");
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleChangeBook = (e) => {
    setBook(e.target.value);
  };

  const handleChangeCategory = (e) => {
    setCategory(e.target.value);
  };

  const handleChangeSorter = (e) => {
    setSorter(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: BOOK_FETCH_REQUEST, book, category, sorter });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className={classes.wrapper}>
          <TextField
            onChange={handleChangeBook}
            label="book"
            variant="standard"
            required={true}
          />
          <Button
            className={classes.button}
            type="submit"
            variant="contained"
            color="secondary"
          >
            SUBMIT
          </Button>
        </div>

        <div className={classes.wrapper}>
          <div className={classes.inner}>
            <Typography className={classes.caption} gutterBottom variant="overline" component="div">
              Category
            </Typography>
            <Select value={category} onChange={handleChangeCategory}>
              <MenuItem value="all">all</MenuItem>
              <MenuItem value="art">art</MenuItem>
              <MenuItem value="biography">biography</MenuItem>
              <MenuItem value="computers">computers</MenuItem>
              <MenuItem value="history">history</MenuItem>
              <MenuItem value="medical">medical</MenuItem>
              <MenuItem value="poetry">poetry</MenuItem>
            </Select>
          </div>

          <div className={classes.inner}>
            <Typography className={classes.caption} gutterBottom variant="overline" component="div">
              Sorting by
            </Typography>
            <Select value={sorter} onChange={handleChangeSorter}>
              <MenuItem value="relevance">relevance</MenuItem>
              <MenuItem value="newest">newest</MenuItem>
            </Select>
          </div>
        </div>
      </form>

  
          
    </div>
  );
};

export default BookForm;
