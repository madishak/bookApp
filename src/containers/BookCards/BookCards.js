import React from "react";
import { connect, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { Card, CardContent, CardMedia, Typography} from "@mui/material";
import { BOOK_ID } from "../../constants"

const useStyles = makeStyles({
  wrapper: {
    display: "flex",
    justifyContent: "space-around",
    flexFlow: "wrap row",
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
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const classes = useStyles();
  const { books } = props;

  console.log(books);

  const handleBook = (id) => () => {
    dispatch({ type: BOOK_ID, id });
    navigate(`/${id}`);
  }


  return (
    <div className={classes.wrapper}>
      {books !== undefined ? (
        books.map(({ id, volumeInfo }, i) => (
          <Card className={classes.card} key={i} onClick={handleBook(id)}>
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
        <div>Wait..</div>
      )}
    </div>
  );
};

export default connect(mapStateToProps)(BookCards);
