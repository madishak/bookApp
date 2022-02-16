import React from "react";
import ReactDOM from "react-dom";
// import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import createSagaMidleware from "redux-saga";
// import { Router } from "react-router-dom";
import rootSaga from "./src/rootSaga";
// import "roboto-fontface/css/roboto/roboto-fontface.css";
import reducer from "./src/rootReducer";
import App from "./src/App";
// import { createBrowserHistory } from "history";


const sagaMidleware = createSagaMidleware();
const middleware = applyMiddleware(sagaMidleware);

const store = createStore(reducer, middleware);
sagaMidleware.run(rootSaga);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
