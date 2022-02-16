import React from "react";
// import { Switch, Route } from "react-router-dom";
import BookForm from "./containers/BookForm/BookForm";

const App = () => {

  return (
      <div>Obi-Wan Fluffy
          <BookForm/>
      </div>
    // <Switch>
    //   <Route exact path="/" component={Home} />
    //   <Route exact path="/:id" component={PhotoCardView} />
    // </Switch>
  );
}

export default App;
