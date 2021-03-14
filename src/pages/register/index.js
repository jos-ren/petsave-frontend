import React, { useState, useEffect } from "react";
import { useParams, useHistory } from 'react-router-dom';
import axios from "axios";

import AddPhoto from "comps/AddPhoto";
import TopNav from "comps/TopNav";
import Button from "comps/Button/default";
import Input from "comps/Input";

function Register() {

  const history = useHistory();
  const [email, setEmail] = useState([]);
  const [username, setUsername] = useState([]);
  const [password, setPassword] = useState([]);

  const HandleRegister = async () => {
    const resp = await axios.post("https://advdyn2021.herokuapp.com/users", { email: email, username: username, pwd: password });
    console.log("response", resp);
    if (resp.data !== "Something went wrong registering user") {
      history.push("/login")
    }
  }

  return (
    <div className="page">
      <TopNav displayr="none" />
      <AddPhoto />
      <Input header="Email" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} />
      <Input header="Username" placeholder="Enter your username" onChange={(e) => setUsername(e.target.value)} />
      <Input header="Password" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)} />
      <Button margin="12px" text="Create Account"
        onClick={() => {
          HandleRegister();
          // history.push("/home")
        }}
      />
    </div>
  );
}

export default Register;