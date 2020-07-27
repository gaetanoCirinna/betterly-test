import React, { Component, Fragment } from "react";

import { Container, Row, Col } from "react-bootstrap";

const Experience = (props) => {
  return (
    <Fragment>
      <div className="Work">
        <Container>
          <Row>
            <Col md={12}>
              <h1 className="main-title">__esperienze-di-lavoro</h1>
            </Col>

            {Object.keys(props.works).length > 0
              ? props.works.map((work) => {
                  return (
                    <Col md={12} key={work.sys.id}>
                      <div className="content">
                        <span className="content__name">
                          {work.fields["nameAgency"]}
                        </span>
                        <span className="content__year">
                          {work.fields["year"]}
                        </span>
                        <span className="content__title">
                          {work.fields["description"]}
                        </span>
                      </div>
                    </Col>
                  );
                })
              : null}
          </Row>
        </Container>
      </div>

      <div className="Education">
        <Container>
          <Row>
            <Col md={12}>
              <h1 className="main-title">__education</h1>
            </Col>
            {Object.keys(props.educations).length > 0
              ? props.educations.map((education) => {
                  return (
                    <Col md={12} key={education.sys.id}>
                      <div className="content">
                        <span className="content__name">
                          {education.fields["nameSchool"]}
                        </span>
                        <span className="content__year">
                          {education.fields["year"]}
                        </span>
                        <span className="content__title">
                          {education.fields["description"]}
                        </span>
                      </div>
                    </Col>
                  );
                })
              : null}
          </Row>
        </Container>
      </div>
    </Fragment>
  );
};

export default Experience;
