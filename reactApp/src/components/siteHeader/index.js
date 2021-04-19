/* eslint-disable */
import React from "react";
import AuthHeader from "../authHeader";
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
  } from './siteHeaderElements';
  import "./index.css"

const SiteHeader = () => {
    return (
            <Nav>
                <NavLink to="/">
                <img src={require('../../images/logo.png')} alt='logo' />
                </NavLink>
                <Bars/>
                <NavMenu>
                    <NavLink exact to="/" activeStyle>
                        Home
                    </NavLink>
                    <NavLink to="/Contact" activeStyle>
                        Contact
                    </NavLink>
                    <NavLink to="/Profile" activeStyle>
                        Profile
                    </NavLink>
                </NavMenu>
                <NavMenu>
                    <li className ="account"> <AuthHeader/> </li>
                </NavMenu>
            </Nav>
        );
    };

export default SiteHeader;