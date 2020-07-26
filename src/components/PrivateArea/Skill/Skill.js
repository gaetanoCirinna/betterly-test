import React, { Fragment, Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

class Skill extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disableMod: true,
    };
  }
  render() {
    return (
      <Col md={12}>
        <div className="Skill">
          <Col md={12}>
            <h1 className="main-title">
              {this.props.title}
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
          </Col>
          <Row>
            {this.props.skills.map((element, index) => {
              return (
                <Col md={4} key={index}>
                  <div className="content-skill">
                    <div className="icon">
                      <span
                        className="material-icons "
                        onClick={(event) => {
                          this.props.click(event, index);
                        }}
                      >
                        cancel_presentation
                      </span>
                    </div>
                    <div className="name">
                      {this.state.disableMod ? (
                        <span>{element}</span>
                      ) : (
                        <input
                          disabled={this.state.disableMod}
                          type="text"
                          placeholder={element}
                        />
                      )}
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </div>
      </Col>
    );
  }
}
export default Skill;
