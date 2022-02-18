import React, { useState, useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import { BOOK_ID } from "../../constants";

const useStyles = makeStyles({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    flexFlow: "wrap row",
  },
  inner: {
    display: "flex",
    justifyContent: "space-around",
    flexFlow: "wrap row",
  },
  text: {
    margin: "0 auto",
    padding: "15px",
    fontSize: "20px",
    fontWeight: "900",
  },
  card: {
    width: "20%",
    minWidth: "150px",
    margin: "10px 20px",
  },
  image: {
    margin: "0 auto",
    padding: "15px 0",
    width: "auto",
    height: "150px",
    minHeight: "150px",
  },
  title: {
    fontSize: "14px",
    fontWeight: "900",
  },
  authors: {
    fontSize: "12px",
  },
});

const mapStateToProps = (state) => ({
  books: state.books.books,
});

const BookCards = (props) => {
  const PAGINATION_STEP = 30;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const classes = useStyles();
  const { books } = props;
  const [start, setStart] = useState(30);
  const [pagination, setPagination] = useState(60);
  const [booksSlice, setBooksSlice] = useState([]);

  const handleBook = (id) => () => {
    dispatch({ type: BOOK_ID, id });
    navigate(`/${id}`);
  };

  useEffect(() => {
    setBooksSlice(books ? books.slice(0, PAGINATION_STEP) : []);
  }, [books]);

  const handleBooksLoad = () => {
    setStart(start + PAGINATION_STEP);
    setPagination(pagination + PAGINATION_STEP);

    setBooksSlice(
      booksSlice.concat(books ? books.slice(start, pagination) : [])
    );
  };

  return (
    <div className={classes.wrapper}>
      {books ? (
        <div className={classes.text}>Found {books.length} results</div>
      ) : null}
      <div className={classes.inner}>
        {booksSlice ? (
          booksSlice.map(({ id, volumeInfo }, index) => (
            <Card className={classes.card} key={index} onClick={handleBook(id)}>
              <CardMedia
                component="img"
                className={classes.image}
                image={
                  volumeInfo.imageLinks
                    ? volumeInfo.imageLinks.smallThumbnail
                    : null
                }
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="overline" component="div">
                  {volumeInfo.categories ? volumeInfo.categories[0] : null}
                </Typography>
                <Typography
                  className={classes.title}
                  gutterBottom
                  component="div"
                >
                  {volumeInfo.title ? volumeInfo.title : null}
                </Typography>
                <Typography
                  className={classes.authors}
                  gutterBottom
                  component="div"
                >
                  {volumeInfo.authors ? volumeInfo.authors.join(", ") : null}
                </Typography>
              </CardContent>
            </Card>
          ))
        ) : (
          <div className={classes.text}>
            Fill in the form and wait just a little.....
          </div>
        )}
      </div>
      {books ? (
        <div className={classes.text}>
          <Button onClick={handleBooksLoad} variant="contained">
            Load more
          </Button>
        </div>
      ) : null}
    </div>
  );
};

export default connect(mapStateToProps)(BookCards);
