import React, { Fragment, Component } from "react";

import { Container, Row, Col } from "react-bootstrap";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disableMod: true,
    };
  }
  render() {
    return (
      <Col md={12}>
        <div className="List">
          <div className="content">
            <h1 className="main-title">
              {this.props.title}{" "}
              <span
                class="material-icons icon-edit"
                onClick={() => {
                  this.setState({
                    disableMod: !this.state.disableMod,
                  });
                }}
              >
                create
              </span>
            </h1>
            <Row>
              {this.props.list.map((ele) => {
                return (
                  <Col md={4}>
                    <ul key={ele.sys["id"]}>
                      <li>
                        <div className="list">
                          {this.state.disableMod ? (
                            <Fragment>
                              <span className="list__name">
                                {ele.fields["name"]}
                              </span>
                              <span className="list__year">
                                {ele.fields["year"]}
                              </span>
                              <span className="list_description">
                                {ele.fields["description"]}
                              </span>
                            </Fragment>
                          ) : (
                            <Fragment>
                              <input
                                disabled={this.state.disableMod}
                                type="text"
                                placeholder={ele.fields["name"]}
                              />
                              <input
                                disabled={this.state.disableMod}
                                type="text"
                                placeholder={ele.fields["year"]}
                              />
                              <input
                                disabled={this.state.disableMod}
                                type="text"
                                placeholder={ele.fields["description"]}
                              />
                            </Fragment>
                          )}
                        </div>
                        <span
                          class="material-icons icon"
                          onClick={(event) => {
                            this.props.click(event, ele.sys["id"]);
                          }}
                        >
                          cancel_presentation
                        </span>
                      </li>
                    </ul>
                  </Col>
                );
              })}
            </Row>
          </div>
        </div>
      </Col>
    );
  }
}
export default List;
