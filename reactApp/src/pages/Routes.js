import React, { Component } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";
import LoginPage from "./loginPage";
import SignUpPage from "./signUpPage";
import Profile from "./ProfilePage";
import PrivateRoute from "./privateRoute";
import AuthProvider from "../contexts/authContext";
import SiteHeader from '../components/siteHeader';


class Routes extends Component {
    render() {
      return (
        <BrowserRouter>
          <AuthProvider>
              <div>
              <h1> PortFoliGO </h1>
              <SiteHeader />
                <div className="content">
                    <Route exact path="/" component={Home}/>
                    <Route path="/login" component={LoginPage} />
                    <Route path="/signup" component={SignUpPage} />
                    <Route path="/stuff" component={Stuff}/>
                    <Route path="/contact" component={Contact}/>
                    <PrivateRoute path="/profile" component={Profile} />
                </div>
              </div>
      </AuthProvider>
    </BrowserRouter>
      );
    }
  }
 
export default Routes;