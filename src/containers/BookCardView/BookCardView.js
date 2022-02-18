import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";

const useStyles = makeStyles({
  wrapper: {
    display: "flex",
    justifyContent: "space-around",
    flexFlow: "wrap row",
  },
  inner: {
    width: "50%",
    padding: "0 10px",
  },
  image: {
    margin: "0 auto",
    padding: "15px",
    width: "auto",
    height: '320px',
    minHeight: "100px",
  },
  title: {
    fontSize: "14px",
    fontWeight: "900",
  },
  authors: {
    fontSize: "12px",
  },
  description: {
    fontSize: "12px",
    paddingTop: "15px",
  },
  backButton: {
    display: "flex",
    justifyContent: "center",
    margin: "0 auto",
    textTransform: "uppercase",
    textDecoration: "none",
    border: "1px solid #ccc",
    borderRadius: "5px",
    padding: "10px 15px",
    color: "black",
    width: "250px",
  },
});

const mapStateToProps = (state) => ({
  book: state.books.books.filter(({ id }) => id === state.bookID),
});

const BookCardView = (props) => {
  const classes = useStyles();
  const [{ volumeInfo }] = props.book;
  
  return (
    <div>
      <Link className={classes.backButton} to="/">Back to book list</Link>
      {!volumeInfo.length ? (
        <div className={classes.wrapper}>
          <img className={classes.image}
            src={
              volumeInfo.imageLinks
                ? volumeInfo.imageLinks.thumbnail
                : null
            }
          />
          <div className={classes.inner}>
          <Typography gutterBottom variant="overline" component="div">
                {volumeInfo.categories ? volumeInfo.categories : null}
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
              <Typography
                className={classes.description}
                gutterBottom
                component="div"
              >
               {volumeInfo.description ? volumeInfo.description : null}
              </Typography>
            
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default connect(mapStateToProps)(BookCardView);
