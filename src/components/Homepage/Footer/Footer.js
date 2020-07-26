import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <Container>
          <Row>
            <Col md={12}>
              <h1 className="main-title main-title--dark Footer__title">
                Dammi consigli pls
              </h1>
            </Col>
            <Col md={12}>
              <div className="form-content">
                <form>
                  <label for="name">Nome</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your name.."
                  />

                  <label for="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your email.."
                  />

                  <button type="submit"> Invia</button>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default Footer;
