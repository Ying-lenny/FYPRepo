import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { reducers } from './reducers';
import Routes from "./pages/Routes";
import "./pages/index.css";

const store = createStore(reducers, compose(applyMiddleware(thunk)));
 
ReactDOM.render(
  <Provider store={store}>
    <Routes/>
  </Provider>, 
  document.getElementById("root")
);