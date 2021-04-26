import React from "react";
import { Grow } from '@material-ui/core';
 
function Homepage() {
    return (
      <Grow in>
          <div>
            <h1 className="pageHeader">Homepage</h1>
          </div>
      </Grow>
    );
  }
 
export default Homepage;