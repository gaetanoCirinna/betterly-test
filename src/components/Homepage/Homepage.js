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
  }

  render() {
    return (
      <Fragment>
        <div className="Homepage">
          <Header></Header>
          <LargeHero></LargeHero>
          <Experience
            works={this.state.works}
            educations={this.state.educations}
          ></Experience>
          <Skills></Skills>
          <Footer></Footer>
        </div>
      </Fragment>
    );
  }
}
export default Homepage;
