import React, { Component } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";
import { PublicPage, Profile } from "./publicPage";
import LoginPage from "./loginPage";
import SignUpPage from "./signUpPage";
import PrivateRoute from "./privateRoute";
import AuthHeader from "../components/authHeader";
import AuthProvider from "../contexts/authContext";
import SiteHeader from '../components/siteHeader';


class Main extends Component {
    render() {
      return (
        <BrowserRouter>
          <AuthProvider>
            <AuthHeader />
              <div>
              <h1>Fourth Year Project Blender Repo</h1>
              <SiteHeader />
                <div className="content">
                    <Route exact path="/" component={Home}/>
                    <Route path="/public" component={PublicPage} />
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
 
export default Main;