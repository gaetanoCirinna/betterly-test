import React, { Component, Fragment } from "react";

import { Container, Row, Col } from "react-bootstrap";

import Auth from "./../../Auth";

import Header from "./../Homepage/Header/Header";
import List from "./List/List";
import Skill from "./Skill/Skill";

import { client } from "./../../client";

class PrivateArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      works: [{ title: "ciocio", year: "2929", description: "jnjnjnjnjnjnj" }],
      list: [],
      skills: [
        { name: "General", listSkills: ["html", "xcss", "js"] },
        { name: "GeneralOther", listSkills: ["html", "xcss", "js"] },
        { name: "GeneralOther", listSkills: ["html", "xcss", "js"] },
      ],
    };
  }

  componentDidMount() {
    client
      .getEntries({ content_type: "works" })
      .then((res) => {
        console.log(res);
        this.setState({
          list: [...res.items],
        });
      })
      .catch(console.error);
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

  removeItem = (e, id) => {
    console.log(e, id);
    const newWorks = this.state.list.filter((filter) => {
      if (filter.sys["id"] !== id) {
        return filter;
      }
    });

    this.setState({
      list: [...newWorks],
    });
  };

  removeSkill = (index) => {
    const skillUpdate = this.state.skills.slice(index, 1);
    console.log("skillprima", skillUpdate, this.state.skills);
    this.setState({
      skills: [...skillUpdate],
    });
  };

  render() {
    console.log("skill dal render", this.state.skills);
    return (
      <Fragment>
        <div className="PrivateArea">
          <Header></Header>

          <h1 className="">--private-area</h1>
        </div>
        <div className="PrivateArea__content">
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

        <Container>
          <Row>
            <Col md={12}>
              <h1>Modifica il cv</h1>
            </Col>
          </Row>

          {/* WORKS */}

          <List
            title="WORKS"
            click={this.removeItem}
            list={this.state.list}
          ></List>

          {/* EDUCATIONS */}

          <List
            title="EDUCATION"
            click={this.removeItem}
            list={this.state.list}
          ></List>

          {/* SKILLS */}
          <Row>
            <Col md={12}>
              {this.state.skills.map((skill, index) => {
                return (
                  <Skill
                    click={() => {
                      this.removeSkill(index);
                    }}
                    key={index}
                    title={skill.name}
                  ></Skill>
                );
              })}
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}
export default PrivateArea;
