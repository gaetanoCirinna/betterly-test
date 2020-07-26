import React, { Component, Fragment } from "react";

import { Container, Row, Col } from "react-bootstrap";

import Auth from "./../../Auth";

import Header from "./../Homepage/Header/Header";
import List from "./List/List";
import Skill from "./Skill/Skill";
import Loading from "./../../assets/widget/Loading/Loading";

import { client } from "./../../client";

class PrivateArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      works: [],
      educations: [],
      skills: [],

      loading: false,

      worksStore: [],
      educationsStore: [],
      skillsStore: [],
    };
  }

  componentDidMount() {
    // Works
    client
      .getEntries({ content_type: "works" })
      .then((res) => {
        this.setState({
          worksStore: [...res.items],
        });
      })
      .catch(console.error);

    // Educations
    client
      .getEntries({ content_type: "educations" })
      .then((res) => {
        this.setState({
          educationsStore: [...res.items],
        });
      })
      .catch(console.error);

    // Skills
    client
      .getEntries({ content_type: "skills" })
      .then((res) => {
        const skillsFilter = [
          ...res.items.map((ele) => {
            const frontend = ele.fields.frontendSkills.frontend.map((ele) => {
              return ele.name;
            });
            const other = ele.fields.frontendSkills.otherSkills;
            const skillsArray = frontend.concat(other);

            return skillsArray;
          }),
        ];
        console.log("KMKMKMKMKMK", skillsFilter);

        this.setState({
          skillsStore: [...skillsFilter[0]],
        });
        console.log("state", this.state.skillsStore);
      })
      .catch(console.error);
  }

  submitWorks = (e) => {
    e.preventDefault();
    const works = {
      title: e.target.nameAgency.value,
      year: e.target.year.value,
      description: e.target.description.value,
    };

    this.setState({
      works: [...this.state.works, works],
    });
  };
  submitEducations = (e) => {
    e.preventDefault();
    const educations = {
      title: e.target.nameSchool.value,
      year: e.target.year.value,
      description: e.target.description.value,
    };

    this.setState({
      educations: [...this.state.educations, educations],
    });
  };
  submitSkills = (e) => {
    e.preventDefault();
    const skills = {
      devTool: e.target.devTool.value,
    };

    this.setState({
      skills: [...this.state.skills, skills],
    });
  };

  submitData = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({
        works: [],
        skills: [],
        educations: [],
        loading: false,
      });
    }, 2500);
  };

  removeItemWorks = (e, id) => {
    console.log(e, id);
    const newWorks = this.state.worksStore.filter((filter) => {
      if (filter.sys["id"] !== id) {
        return filter;
      }
    });

    this.setState({
      worksStore: [...newWorks],
    });
  };
  removeItemEducations = (e, id) => {
    console.log(e, id);
    const newEducations = this.state.educationsStore.filter((filter) => {
      if (filter.sys["id"] !== id) {
        return filter;
      }
    });

    this.setState({
      educationsStore: [...newEducations],
    });
  };
  removeItemSkills = (e, index) => {
    const newSkills = this.state.skillsStore.filter((filter, i) => {
      if (index !== i) {
        console.log("ENTROOO");
        return filter;
      }
    });
    console.log("vecchio", this.state.skillsStore, "nuovo", newSkills);

    console.log(index);
    this.setState({
      skillsStore: [...newSkills],
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
      <div className="PrivateArea">
        <Header></Header>
        <div className="large-hero">
          <h1 className="">--private-area</h1>
        </div>

        <div className="content content--work">
          <Container>
            <Row>
              <Col md={4}>
                <div className="form">
                  <h2>Inserisci work</h2>
                  <form
                    onSubmit={(event) => {
                      this.submitWorks(event);
                    }}
                  >
                    <label for="name">Nome</label>
                    <input
                      type="text"
                      name="nameAgency"
                      placeholder="Inserisci nome agenzia"
                      onChange={(event) => {
                        console.log(event.target.value);
                      }}
                    />
                    <label for="name">Nome</label>
                    <input
                      type="text"
                      name="year"
                      placeholder="Durata esperienza"
                      onChange={(event) => {
                        console.log(event.target.value);
                      }}
                    />

                    <label for="name">Nome</label>
                    <input
                      type="text"
                      name="description"
                      placeholder="Descrizione lavoro"
                      onChange={(event) => {
                        console.log(event.target.value);
                      }}
                    />

                    <button type="submit">AGGIUNGI</button>
                  </form>
                </div>
              </Col>

              <Col md={8}>
                <div className="updated-content">
                  <div className="updated">
                    <h2 className="title">Esperienze di lavoro aggiunte:</h2>
                    <Row>
                      {this.state.works.map((work, index) => {
                        return (
                          <Col md={4} key={index}>
                            <div className="updated__element">
                              <h1>{work.title}</h1>
                              <span>{work.year}</span>
                              <p>{work.description}</p>
                            </div>
                          </Col>
                        );
                      })}
                    </Row>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="content content--education">
          <Container>
            <Row>
              <Col md={4}>
                <div className="form">
                  <h2>Inserisci formazione scolastica</h2>
                  <form
                    onSubmit={(event) => {
                      this.submitEducations(event);
                    }}
                  >
                    <label for="name">Nome</label>
                    <input
                      type="text"
                      name="nameSchool"
                      placeholder="Inserisci nome scuola"
                      onChange={(event) => {
                        console.log(event.target.value);
                      }}
                    />
                    <label for="name">Nome</label>
                    <input
                      type="text"
                      name="year"
                      placeholder="Durata esperienza"
                      onChange={(event) => {
                        console.log(event.target.value);
                      }}
                    />

                    <label for="name">Nome</label>
                    <input
                      type="text"
                      name="description"
                      placeholder="Descrizione"
                      onChange={(event) => {
                        console.log(event.target.value);
                      }}
                    />

                    <button type="submit">AGGIUNGI</button>
                  </form>
                </div>
              </Col>

              <Col md={8}>
                <div className="updated-content">
                  <div className="updated">
                    <h2 className="title">
                      Formazione scolastica da aggiungere:
                    </h2>
                    <Row>
                      {this.state.educations.map((education, index) => {
                        return (
                          <Col md={4} key={index}>
                            <div className="updated__element">
                              <h1>{education.title}</h1>
                              <span>{education.year}</span>
                              <p>{education.description}</p>
                            </div>
                          </Col>
                        );
                      })}
                    </Row>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="content content--skills">
          <Container>
            <Row>
              <Col md={4}>
                <div className="form">
                  <h2>Inserisci dev tool</h2>
                  <form
                    onSubmit={(event) => {
                      this.submitSkills(event);
                    }}
                  >
                    <label for="name">Nome</label>
                    <input
                      type="text"
                      name="devTool"
                      placeholder="Inserisci dev tool"
                      onChange={(event) => {
                        console.log(event.target.value);
                      }}
                    />
                    <button type="submit">AGGIUNGI</button>
                  </form>
                </div>
              </Col>

              <Col md={8}>
                <div className="updated-content">
                  <div className="updated">
                    <h2 className="title">Skill da aggiungere:</h2>
                    <Row>
                      {this.state.skills.map((skill, index) => {
                        return (
                          <Col md={4} key={index}>
                            <div className="updated__element">
                              <h1>{skill.devTool}</h1>
                            </div>
                          </Col>
                        );
                      })}
                    </Row>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="send-data">
          <Container fluid={true}>
            <Row>
              <Col md="12">
                <div className="send-data__content">
                  {!this.state.loading ? (
                    <Fragment>
                      <h1>Warning!</h1>
                      <p>
                        Quando hai finito di inserire gli elementi, premi il
                        bottone per aggiornare il CV.
                      </p>
                      <button
                        onClick={() => {
                          this.submitData();
                        }}
                      >
                        SEND DATA
                      </button>
                    </Fragment>
                  ) : (
                    <Loading></Loading>
                  )}
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="mod-cv">
          <Container>
            <Row>
              <Col md={12}>
                <h1 className="main-title">Modifica le informazioni nel CV</h1>
              </Col>

              <List
                list={this.state.worksStore}
                title="Works"
                click={this.removeItemWorks}
              ></List>

              <List
                list={this.state.educationsStore}
                title="Educations"
                click={this.removeItemEducations}
              ></List>

              <Skill
                title="Skills"
                skills={this.state.skillsStore}
                click={this.removeItemSkills}
              ></Skill>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}
export default PrivateArea;
