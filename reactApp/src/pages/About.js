import React, { Component } from "react";
import { Container, Grow } from '@material-ui/core';
import AboutAccordion from "../components/AboutAccordian/Accordian";
 
class About extends Component {
  render() {
    return (
      <Grow in>
        <Container>
          <div>
            <h1 className="pageHeader">Welcome to PortFoliGo</h1>
            <AboutAccordion />
          </div>
        </Container>
      </Grow>
    );
  }
}
 
export default About;