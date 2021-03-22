import React, { useState, useEffect } from "react";
import { useParams, useHistory } from 'react-router-dom';
import axios from "axios";

import AddPhoto from "comps/AddPhoto";
import TopNav from "comps/TopNav";
import Button from "comps/Button/default";
import Input from "comps/Input";

function Register() {

  const history = useHistory();
  const [imgurl, setImgurl] = useState(null);
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [pwd, setPwd] = useState("");
  const [bio, setBio] = useState("");

  const HandleRegister = async () => {
    console.log(image);
    const data = new FormData()
    data.append('profile_pic', image)
    data.append('email', email)
    data.append('fullname', name)
    data.append('username', username)
    data.append('pwd', pwd)
    data.append('bio', bio)
    const resp = await axios.post("https://petsave-backend.herokuapp.com/api/register", data);
    console.log("response", resp);
    // return false;
    if (resp.data !== "Something went wrong registering user") {
      // this part is based on what we add in database - how?
      history.push("/login")
    } else {
      history.push("/home")
    }
  }

  return (
    <div className="page">
      <TopNav displayr="none" text="Register" />
      <AddPhoto
        filename={image}
        onChange={
          e => {
            setImage(e.target.files[0])
            setImgurl(URL.createObjectURL(e.target.files[0]))
          }
        }
        image={imgurl}
      />
      <Input header="Full Name" placeholder="Enter your full name" onChange={(e) => setName(e.target.value)} />
      <Input header="Email" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} />
      <Input header="Username" placeholder="Enter your username" onChange={(e) => setUsername(e.target.value)} />
      <Input header="Password" placeholder="Enter your password" type="password" onChange={(e) => setPwd(e.target.value)} />
      <Input header="Bio" placeholder="Write a brief description of yourself" onChange={(e) => setBio(e.target.value)} />
      <Button margin="12px" text="Create Account"
        disable={username === "" || pwd === "" || email ==="" || name ==="" || bio === ""}
        bgcolor="#c4c4c4"
        onClick={() => {
          HandleRegister();
          // console.log(pwd)
        }}
      />
    </div>
  );
}

export default Register;