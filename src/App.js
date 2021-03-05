import React, { useState, useEffect } from "react";
import "./App.scss";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import About from 'pages/about';
import Login from 'pages/login';
import AddPost from 'pages/addPost';
import EditPost from 'pages/editProfile';
import Register from 'pages/register';

import UserProfile from 'pages/userprofile';
import Profile from 'pages/profile';

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
  
        <Route exact path="/profile">
          <Profile />
        </Route>
  
        <Route exact path="/userprofile">
          <UserProfile />
         </Route>
  
        <Route exact path="/addpost">
          <AddPost />
        </Route>
  
        <Route exact path="/editProfile">
          <EditPost />
        </Route>
  
        <Route exact path="/register">
          <Register />
        </Route>
  
      </Switch>
    </Router>
  </div>
}

export default App;
