import React, { useState, useEffect } from "react";
import {useParams, useHistory} from 'react-router-dom';
import axios from "axios";

import AddPhoto from "comps/AddPhoto";
import TopNav from "comps/TopNav";
import Button from "comps/Button/default";
import Input from "comps/Input";

function Register() {

    const history = useHistory();

    return (
      <div className="page">
        <TopNav />
        <AddPhoto />
        <Input />
        <Input header="Email" placeholder="Enter your new email" />
        <Input header="Username" placeholder="Enter your new username"  />
        <Input header="Password" placeholder="Enter your new password" />
        <Button margin="12px" text= "Create Account" 
            onClick={()=>{
                history.push("/home")
            }}
        />
      </div>
    );
  }
  
  export default Register;