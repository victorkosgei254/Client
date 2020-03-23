import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "../src/reducers/rootReducer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Market from "./components/market";
import SigIn from "./components/signIn";
import SignUp from "./components/signup";
import CheckOut from "./components/checkout";
const store = createStore(rootReducer);
ReactDOM.render(
  <Provider store={store}>
    <CssBaseline />
    <AppBar position="parent">
      <Toolbar>
        <Typography variant="h6" color="inherit" noWrap>
          Rental.io
        </Typography>
      </Toolbar>
    </AppBar>
    <Router>
      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/signin">
          <SigIn />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/checkout">
          <CheckOut />
        </Route>
        <Route path="/">
          <Market />
        </Route>
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);
