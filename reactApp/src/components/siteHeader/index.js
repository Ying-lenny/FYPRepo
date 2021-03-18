import React from "react";
import { NavLink } from "react-router-dom";

const SiteHeader = () => {
    return (
                    <ul className="header">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/stuff">Account</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                        <li><NavLink to="/profile">Profile</NavLink></li>
                    </ul>
    );
};

export default SiteHeader;