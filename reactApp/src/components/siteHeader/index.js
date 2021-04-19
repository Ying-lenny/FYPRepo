/* eslint-disable */
import React from "react";
import { NavLink } from "react-router-dom";
import AuthHeader from "../authHeader";
import "./index.css"

const SiteHeader = () => {
    return (
        <div className="header" >
            <ul>
                <li><a className = "Logo"> PortFoliGO </a> </li>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
                <li><NavLink to="/profile">Profile</NavLink></li>
                <li className ="account" > <AuthHeader/> </li>
            </ul>
        </div>
        );
    };

export default SiteHeader;