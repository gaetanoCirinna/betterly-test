import React, { Component } from "react";

import Auth from "./../../Auth";

import Header from "./../Homepage/Header/Header";

class PrivateArea extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="PrivateArea">
        {/* LOGIN AREA
        <button
          onClick={() => {
            Auth.logout(() => {
              this.props.history.push("/");
            });
          }}
        >
          Log out
        </button> */}
        <Header></Header>
        <h1 className="">--private-area</h1>
      </div>
    );
  }
}
export default PrivateArea;
