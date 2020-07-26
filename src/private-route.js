import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import PrivateArea from "./components/PrivateArea/PrivateArea";

import Auth from "./Auth";

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        return Auth.isAuth() ? (
          <Component {...props}></Component>
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: {
                from: props.location,
              },
            }}
          ></Redirect>
        );
      }}
    ></Route>
  );
};

export default PrivateRoute;
