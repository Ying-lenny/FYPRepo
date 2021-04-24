import React, { Component } from "react";
import AboutAccordion from "../components/AboutAccordian/Accordian";
 
class About extends Component {
  render() {
    return (
      <div>
        <h1 className="pageHeader">Welcome to PortFoliGo</h1>
        <AboutAccordion />
      </div>
    );
  }
}
 
export default About;