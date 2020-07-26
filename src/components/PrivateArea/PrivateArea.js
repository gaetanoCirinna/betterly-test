import React, { Component } from "react";

import Auth from "./../../Auth";

class PrivateArea extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
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
      </div>
    );
  }
}
export default PrivateArea;
