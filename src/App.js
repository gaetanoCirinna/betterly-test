import React from "react";
import "./App.scss";

import { BrowserRouter, Route, Switch, withRouter } from "react-router-dom";

import { Container, Row, Col } from "react-bootstrap";

import Homepage from "./components/Homepage/Homepage.js";
import PrivateArea from "./components/PrivateArea/PrivateArea";
import LogIn from "./components/LogIn/LogIn.js";

import PrivateRoute from "./private-route";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={PrivateArea}></Route>
        <PrivateRoute
          exact
          path="/private-area"
          component={PrivateArea}
        ></PrivateRoute>
        <Route path="/log-in" component={LogIn}></Route>
        <Route path="*" component={() => "404"}></Route>
      </Switch>
    </div>
  );
}

export default withRouter(App);
