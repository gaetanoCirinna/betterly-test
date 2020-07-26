import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import Auth from "./../../Auth";

class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      submitForm: false,
    };
  }
  submitForm = (e) => {
    e.preventDefault();

    if (
      e.target.email.value === "user@betterly.it" &&
      e.target.password.value === "rootroot"
    ) {
      this.setState({
        loading: true,
      });
      setTimeout(() => {
        Auth.login(() => {
          this.props.history.push("/private-area");
        });
      }, 800);
    } else {
    }
  };
  render() {
    return (
      <div className="LogIn">
        <div className="content">
          {!this.state.loading ? (
            <Container>
              <Row>
                <Col md={12}>
                  <h1 className="main-title">__log-in</h1>
                </Col>
                <Col md={12}>
                  <div className="form-content">
                    <form
                      onSubmit={(event) => {
                        this.submitForm(event);
                      }}
                    >
                      <label for="email">Indirizzo email</label>
                      <input
                        required
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Your email.."
                      />

                      <label for="email">Password</label>
                      <input
                        required
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Your password.."
                      />

                      <button type="submit">SUBMIT</button>
                    </form>
                  </div>
                </Col>
              </Row>
            </Container>
          ) : (
            <div className="lds-roller">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default withRouter(LogIn);
