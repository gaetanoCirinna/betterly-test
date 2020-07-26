import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";

class Skills extends Component {
  render() {
    return (
      <div className="Skills">
        <Container>
          <Row>
            <Col md="12">
              <h1 className="main-title">__skills-section</h1>
            </Col>
            <Col md="6">
              <div className="skill-content">
                <span className="title">Html</span>
                <span className="perc">90%</span>
                <div className="bar-content">
                  <div className="bar-full" style={{ width: "90%" }}></div>
                </div>
              </div>
            </Col>
          </Row>

          <Row>
            <Col md={12}>
              <div className="general-skill">
                <h2 className="second-title">Build Tools</h2>
                <p>Webpack</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default Skills;
