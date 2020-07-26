import React, { Component, Fragment } from "react";

import { Container, Row, Col } from "react-bootstrap";

class LargeHero extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="LargeHero">
        <Container>
          <Row>
            <Col md="12">
              <h1 className="title">Gaetano Cirinnà</h1>
            </Col>
            <Col md="12">
              <div className="contacts">
                <tbody>
                  <tr>
                    <th>Contatti</th>
                  </tr>
                  <tr>
                    <td className="col-name">DDN:</td>
                    <td>03 luglio 1994</td>
                  </tr>
                  <tr>
                    <td className="col-name">EMAIL:</td>
                    <td>gaetano.g.cirinna@gmail.com</td>
                  </tr>
                  <tr>
                    <td className="col-name">INDIRIZZO:</td>
                    <td>Milano, Italia</td>
                  </tr>
                </tbody>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default LargeHero;
