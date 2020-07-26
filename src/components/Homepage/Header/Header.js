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
        {!Auth.isAuth() ? (
          <span>
            <Link to="/log-in">log in</Link>
          </span>
        ) : (
          <span>
            <Link
              onClick={() => {
                Auth.logout(() => {
                  props.history.push("/");
                });
              }}
            >
              log out
            </Link>
          </span>
        )}
      </div>
    </div>
  );
};
export default withRouter(Header);
