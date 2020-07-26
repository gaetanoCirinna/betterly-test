import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";

const Skills = (props) => {
  return (
    <div className="Skills">
      <Container>
        <Row>
          <Col md="12">
            <h1 className="main-title">__skills-section</h1>
          </Col>
          {/* Skill da frontend */}
          {props.skills.map((ele) => {
            return ele.fields.frontendSkills.frontend.map((skill) => {
              return (
                <Col md="6">
                  <div className="skill-content">
                    <span className="title">{skill.name}</span>
                    <span className="perc">{skill.perc}</span>
                    <div className="bar-content">
                      <div
                        className="bar-full"
                        style={{ width: skill.perc }}
                      ></div>
                    </div>
                  </div>
                </Col>
              );
            });
          })}
        </Row>

        <Row>
          <Col md={12}>
            <div className="general-skill">
              <h2 className="second-title">Other tools</h2>
              <ul>
                {props.skills.map((ele) => {
                  return ele.fields.frontendSkills.otherSkills.map((skill) => {
                    return <li>{skill}</li>;
                  });
                })}
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Skills;
