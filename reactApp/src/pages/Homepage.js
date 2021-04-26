import React from "react";
import { Grow } from '@material-ui/core';
import HomeCards from "../components/HomeCards/HomeCards";

 
function Homepage() {
    return (
      <Grow in>
          <div>
            <h1 className="pageHeader">Homepage</h1>
            <HomeCards/>
          </div>
      </Grow>
    );
  }
 
export default Homepage;