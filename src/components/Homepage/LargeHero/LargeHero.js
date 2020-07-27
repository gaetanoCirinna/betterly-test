import React, { Component, Fragment } from "react";

import { Container, Row, Col } from "react-bootstrap";

const LargeHero = (props) => {
  return (
    <div className="LargeHero">
      <Container>
        <Row>
          <Col md="12">
            <h1 className="title">Gaetano Cirinnà</h1>
          </Col>
          <Col md="12">
            <div className="contacts">
              {props.contacts.map((ele) => {
                return ele.fields.contacts.contacts.map((contact) => {
                  return (
                    <Fragment>
                      <tbody>
                        <tr>
                          <th>Contatti</th>
                        </tr>
                        <tr>
                          <td className="col-name">DDN:</td>
                          <td>{contact.ddn}</td>
                        </tr>
                        <tr>
                          <td className="col-name">EMAIL:</td>
                          <td>{contact.email}</td>
                        </tr>
                        <tr>
                          <td className="col-name">INDIRIZZO:</td>
                          <td>{contact.indirizzo}</td>
                        </tr>
                      </tbody>
                    </Fragment>
                  );
                });
              })}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default LargeHero;
