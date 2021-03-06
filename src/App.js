import React, { useState, useEffect } from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import jwtDecode from "jwt-decode";
import useLocalStorage from "react-use-localstorage";
import About from 'pages/about';
import Login from 'pages/login';
import Register from 'pages/register';
import Home from 'pages/home';
import Post from 'pages/post';
import AddPost from 'pages/addPost';
import UserProfile from 'pages/myprofile';
import Profile from 'pages/profile';

function App() {
  const [token, setToken] = useLocalStorage("token");
  const [user, setUser] = useState();

  useEffect(() => {
    const user = token ? jwtDecode(token) : null;
    setUser(user);
  }, [token]);
  

  return <div>
    <Router>
      <Switch>

        <Route exact path="/">
          <About />
        </Route>

        <Route exact path="/login">
          <Login setToken={setToken}/>
        </Route>

        <Route exact path="/register">
          <Register />
        </Route>

        <Route exact path="/home">
          <Home setToken={setToken}/>
        </Route>

        <Route exact path="/profile/:username">
          <Profile />
        </Route>

        <Route exact path="/myprofile">
          <UserProfile />
        </Route>

        <Route exact path="/myprofile/edit">
          <UserProfile />
        </Route>

        <Route exact path="/post/:id">
          <Post />
        </Route>

        <Route exact path="/addpost">
          <AddPost />
        </Route>


      </Switch>
    </Router>
  </div>
}

export default App;
