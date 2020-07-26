import React, { Component, Fragment } from "react";

import { Container, Row, Col } from "react-bootstrap";

const Experience = (props) => {
  console.log("PROPS", Object.keys(props.works).length);

  return (
    <Fragment>
      {/* <div className="Work">
        <Container>
          <Row>
            <Col md={12}>
              <h1 className="main-title">__esperienze-di-lavoro</h1>
            </Col>
            <Col md={12}>
              <div className="content">
                <span className="content__name">Guglielmo Marconi shjshjs</span>
                <span className="content__year">2007-2012</span>
                <span className="content__title">Diploma di cose</span>
              </div>
            </Col>
          </Row>
        </Container>
      </div> */}
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
