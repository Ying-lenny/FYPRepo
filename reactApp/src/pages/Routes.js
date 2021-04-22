import React, { Component } from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from "./Home";
import Contact from "./Contact";
// import LoginPage from "./loginPage";
// import SignUpPage from "./signUpPage";
import Profile from "./ProfilePage";
// import PrivateRoute from "./privateRoute";
import Auth from '../components/Auth/Auth';
import SiteHeader from '../components/siteHeader/index';


class Routes extends Component {
    render() {
      return (
        <BrowserRouter>
              <div>
              <SiteHeader />
                <div className="content">
                    <Route exact path="/" component={Home}/>
                    <Route path="/Auth" component={Auth} />
                    <Route path="/contact" component={Contact}/>
                    <Route path="/profile" component={Profile} />
                </div>
              </div>
    </BrowserRouter>
      );
    }
  }
 
export default Routes;