import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Market from "./market";
import SigIn from "./signIn";
import SignUp from "./signup";

class Counter extends Component {
  state = {
    count: 0
  };
  render() {
    return (
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
          <Route path="/">
            <Market />
          </Route>
        </Switch>
      </Router>
    );
  }

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };
}

export default Counter;
