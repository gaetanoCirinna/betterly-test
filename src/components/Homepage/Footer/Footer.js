import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <Container>
          <Row>
            <Col md={12}>
              <h2 className="second-title main-title--dark Footer__title">
                Vuoi darmi consigli? Scrivimi ma non essere cattivo.
              </h2>
            </Col>
            <Col md={12}>
              <div className="form-content">
                <form
                  action="mailto:cirinna.gaetano@gmail.com"
                  method="POST"
                  enctype="multipart/form-data"
                  name="sendTips"
                >
                  <label for="name">Nome</label>
                  <input
                    required
                    type="text"
                    name="name"
                    placeholder="Your name.."
                  />

                  <label for="email">Email</label>
                  <input
                    required
                    type="text"
                    name="email"
                    placeholder="Your email.."
                  />

                  <label for="tips">Dammi consigli</label>

                  <textarea
                    required
                    name="tips"
                    placeholder="Scrivi qui.."
                  ></textarea>

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
