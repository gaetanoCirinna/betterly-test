import React, { Component, Fragment } from "react";

import { Container, Row, Col } from "react-bootstrap";
import { withRouter, Link } from "react-router-dom";
import Auth from "./../../../Auth";

const Header = (props) => {
  return (
    <div className="Header">
      {/* <div
        className="icon-menu"
        onClick={() => {
          Auth.login(() => {
            props.history.push("/private-area");
          });
        }}
      > 
        <span>log in</span>
      </div> */}

      <div className="icon-menu">
        <span>
          <Link to="/log-in">{Auth.isAuth() ? "log out" : "log in"}</Link>
        </span>
      </div>
    </div>
  );
};
export default withRouter(Header);
