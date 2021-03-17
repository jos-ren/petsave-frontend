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
import EditPost from 'pages/editProfile';
import UserProfile from 'pages/userprofile';
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

        <Route exact path="/profile">
          <Profile />
        </Route>

        <Route exact path="/userprofile/:id">
          <UserProfile />
        </Route>

        <Route exact path="/post">
          <Post />
        </Route>

        <Route exact path="/addpost">
          <AddPost />
        </Route>

        <Route exact path="/editProfile">
          <EditPost />
        </Route>


      </Switch>
    </Router>
  </div>
}

export default App;
