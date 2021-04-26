/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { AppBar, Typography, Toolbar, Avatar, Button } from '@material-ui/core';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';
import { Nav, NavLink, Bars, NavMenu,} from './siteHeaderElements';
import "./index.css"

import logo from '../../images/logo.png';
import * as actionType from '../../constants/actionTypes';
import useStyles from './styles';

import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
const font =  "'Sora', sans-serif";

const theme = createMuiTheme({
  typography: {
    fontFamily: font,
    textTransform: "none",
    }
  });

const siteHeader = () => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const location = useLocation();
    const history = useHistory();
    const classes = useStyles();

    const logout = () => {
    dispatch({ type: actionType.LOGOUT });

    history.push('/auth');

    setUser(null);
    };

    useEffect(() => {
    const token = user?.token;

    if (token) {
        const decodedToken = decode(token);

        if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location]);

    return (
    <AppBar className={classes.appBar} position="static" color="inherit">
        <ThemeProvider theme={theme}>
        <div className={classes.brandContainer}>
        <Typography component={Link} to="/" className={classes.heading} variant="h2" fontFamily= "'Sora', sans-serif" align="center">PortFoli<span className="myClass" style={{color: '#15cdfc'}} >GO</span></Typography>
        <img className={classes.image} src={logo} alt="icon" height="60" />
        </div>
        <Nav>
            <Bars/>
            <NavMenu>
                <NavLink exact to="/">
                    Home
                </NavLink>
                <NavLink to="/Gallery">
                    Gallery
                </NavLink>
                <NavLink to="/Forum">
                    Forum
                </NavLink>
                <NavLink to="/Profile">
                    Profile
                </NavLink><NavLink to="/About">
                    About
                </NavLink>
            </NavMenu>
        </Nav> 
        
        <Toolbar className={classes.toolbar}>
        {user?.result ? (
            <div className={classes.profile}>
            <Avatar className={classes.purple} alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar>

            
            <Typography className={classes.userName} color='#fff' variant="h6">{user?.result.name}</Typography>
            
            <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
            </div>
        ) : (
            <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
        )}
        </Toolbar>
        </ThemeProvider>
    </AppBar>
    );
};

export default siteHeader;