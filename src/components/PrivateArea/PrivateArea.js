import React, { Component, Fragment } from "react";

import { Container, Row, Col } from "react-bootstrap";

import Auth from "./../../Auth";

import Header from "./../Homepage/Header/Header";

class PrivateArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      works: [{ title: "ciocio", year: "2929", description: "jnjnjnjnjnjnj" }],
    };
  }

  submitWorks = (e) => {
    e.preventDefault();
    console.log("jknmkmk", e.target.name.value);
    const works = {
      title: e.target.title.value,
      year: e.target.year.value,
      description: e.target.description.value,
    };

    this.setState({
      works: [...this.state.works, works],
    });
  };

  render() {
    return (
      <Fragment>
        <div className="PrivateArea">
          <Header></Header>

          <h1 className="">--private-area</h1>
        </div>
        <div className="PrivateArea__content">
          {/* <label for="name">Nome</label>
          <input type="text" id="name" name="name" placeholder="Your name.." /> */}
          <Container>
            <Row>
              <Col md={12}>
                <form
                  onSubmit={(event) => {
                    this.submitWorks(event);
                  }}
                >
                  <label for="name">Nome</label>
                  <input
                    type="text"
                    name="title"
                    placeholder="Your name.."
                    onChange={(event) => {
                      console.log(event.target.value);
                    }}
                  />
                  <label for="name">Nome</label>
                  <input
                    type="text"
                    name="year"
                    placeholder="Your name.."
                    onChange={(event) => {
                      console.log(event.target.value);
                    }}
                  />

                  <label for="name">Nome</label>
                  <input
                    type="text"
                    name="description"
                    placeholder="Your name.."
                    onChange={(event) => {
                      console.log(event.target.value);
                    }}
                  />

                  <button type="submit">BTN</button>
                </form>
              </Col>

              <Col md={12}>
                <div className="updated-content">
                  <span>kmkm</span>

                  {this.state.works.map((work) => {
                    return (
                      <Fragment>
                        <h1>{work.title}</h1>
                        <h2>{work.year}</h2>
                        <p>{work.description}</p>
                      </Fragment>
                    );
                  })}
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </Fragment>
    );
  }
}
export default PrivateArea;
