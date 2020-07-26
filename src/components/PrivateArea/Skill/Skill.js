import React, { Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";

const Skill = (props) => {
  return (
    <div className="Skill">
      <Container>
        <Row>
          <Col md={12}>
            <h2>{props.title}</h2>
          </Col>
          <Col md={12}>
            <div className="content">
              <span className="name">ddd</span>
              <span class="material-icons icon" onClick={props.click}>
                cancel_presentation
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Skill;
