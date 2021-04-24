import React, { Component } from "react";
import { Route, BrowserRouter } from "react-router-dom";

import About from "./About";
import Gallery from "./Gallery";
import Forum from "./Forum";
import Profile from "./ProfilePage";
import Auth from '../components/Auth/Auth';
import SiteHeader from '../components/siteHeader/index';

class Routes extends Component {
    render() {
      return (
        <BrowserRouter>
              <div>
              <SiteHeader />
                <div className="content">
                    <Route exact path="/" component={About}/>
                    <Route path="/Gallery" component={Gallery}/>
                    <Route path="/Auth" component={Auth} />
                    <Route path="/Forum" component={Forum}/>
                    <Route path="/profile" component={Profile} />
                </div>
              </div>
    </BrowserRouter>
      );
    }
  }
 
export default Routes;