import React, { Fragment } from "react";

import { Container, Row, Col } from "react-bootstrap";

const List = (props) => {
  return (
    <Row>
      <Col md={12}>
        <div className="content">
          <h2>{props.title}</h2>
          {props.list.map((ele) => {
            return (
              <ul key={ele.sys["id"]}>
                <li>
                  <div className="list">
                    <span>{ele.fields["nameAgency"]}</span>
                    <span>{ele.fields["year"]}</span>
                    <span>{ele.fields["description"]}</span>
                  </div>
                  <span
                    class="material-icons icon"
                    onClick={(event) => {
                      props.click(event, ele.sys["id"]);
                    }}
                  >
                    cancel_presentation
                  </span>
                </li>
              </ul>
            );
          })}
        </div>
      </Col>
    </Row>
  );
};
export default List;
