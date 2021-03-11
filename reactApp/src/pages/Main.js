import React, { Component } from "react";
import { Route, NavLink, BrowserRouter } from "react-router-dom";
import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";
import { PublicPage, Profile } from "./publicPage";
import LoginPage from "./loginPage";
import SignUpPage from "./signUpPage";
import PrivateRoute from "./privateRoute";
import AuthHeader from "./authHeader";
import AuthProvider from "./authContext"; 
class Main extends Component {
    render() {
      return (
        <BrowserRouter>
          <AuthProvider>
            <AuthHeader />
              <div>
                <h1>Fourth Year Project Blender Repo</h1>
                    <ul className="header">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/stuff">Account</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                        <li><NavLink to="/profile">Profile</NavLink></li>
                    </ul>
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