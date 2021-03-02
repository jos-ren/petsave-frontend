import React, { useState, useEffect } from "react";
import {useParams, useHistory} from 'react-router-dom';
import axios from "axios";

import Input from "comps/Input";
import Button from 'comps/Button/default';

function Login ({}) {
    const history = useHistory();

    return (
        <div className="page">
            <img src="/logo.svg" className="logo"/>
            <div className="login_input">
                <Input header="Username"/>
                <Input header="Password" type="password" placeholder="*********"/>
            </div>
            <div className="login_but">
                <Button text="log in" bgcolor="#54BAF3"/>
                <div>
                    <p>Don't have an account?</p>
                    <Button text="register" disable={true}
                    onClick={()=>{
                        history.push("/register")
                    }}/>
                </div>
            </div>
        </div>
    )
};

export default Login;