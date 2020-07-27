import React, { Component, Fragment } from "react";

import Header from "./Header/Header.js";
import LargeHero from "./LargeHero/LargeHero.js";
import Experience from "./Experience/Experience.js";
import Skills from "./Skills/Skills.js";
import Footer from "./Footer/Footer.js";

import { client } from "./../../client";

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      works: [],
      educations: [],
      skills: [],
      contacts: [],
    };
  }

  componentDidMount() {
    // Works
    client
      .getEntries({ content_type: "works" })
      .then((res) => {
        this.setState({
          works: [...res.items],
        });
      })
      .catch(console.error);

    // Educations
    client
      .getEntries({ content_type: "educations" })
      .then((res) => {
        this.setState({
          educations: [...res.items],
        });
      })
      .catch(console.error);

    // Skills
    client
      .getEntries({ content_type: "skills" })
      .then((res) => {
        this.setState({
          skills: [...res.items],
        });
      })
      .catch(console.error);
    // Contatti
    client
      .getEntries({ content_type: "contatti" })
      .then((res) => {
        this.setState({
          contacts: [...res.items],
        });
      })
      .catch(console.error);
  }

  render() {
    return (
      <Fragment>
        <div className="Homepage">
          <Header></Header>
          <LargeHero contacts={this.state.contacts}></LargeHero>
          <Experience
            works={this.state.works}
            educations={this.state.educations}
          ></Experience>
          <Skills skills={this.state.skills}></Skills>
          <Footer></Footer>
        </div>
      </Fragment>
    );
  }
}
export default Homepage;
