import React, { useState, useEffect } from "react";
import "./App.scss";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import About from 'pages/about';
import Login from 'pages/login';
import AddPost from 'pages/addPost';

function App() {
  return <div>
    <Router>
      <Switch>
        <Route exact path="/">
          <About />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/addpost">
          <AddPost />
        </Route>
      </Switch>
    </Router>
  </div>
}

export default App;
