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
                Contattami!
              </h2>
            </Col>
            <Col md={12}>
              <div className="form-content">
                <form
                  action="mailto:cirinna.gaetano@gmail.com"
                  method="POST"
                  encType="multipart/form-data"
                  name="sendTips"
                >
                  <label htmlFor="name">Nome</label>
                  <input
                    required
                    type="text"
                    name="name"
                    placeholder="Your name.."
                  />

                  <label htmlFor="email">Email</label>
                  <input
                    required
                    type="text"
                    name="email"
                    placeholder="Your email.."
                  />

                  <label htmlFor="tips">Mandami offerte</label>

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
