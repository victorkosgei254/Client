import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./components/main";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "../src/reducers/rootReducer";
const store = createStore(rootReducer);
ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById("root")
);
