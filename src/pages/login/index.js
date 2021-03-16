import React, { useState, useEffect } from "react";
import {useParams, useHistory} from 'react-router-dom';
import axios from "axios";

import Input from "comps/Input";
import Button from 'comps/Button/default';

function Login ({}) {
    const history = useHistory();
    const [username, setUsername] = useState("");
    const [pwd, setPwd] = useState("");

    const [error, setError] = useState(null);

    const handleLogin = async () => {
        const resp = await axios.post("https://petsave-backend.herokuapp.com/api/login",{
            username: username,
            pwd: pwd
        });
        console.log(resp);

        if(resp.data !== "Unautorized" && resp.data !== "Incorrect credentials"){
            const token = resp.data.token;
            // 1) store the token in the storage
            sessionStorage.setItem("token", token);
            // 2) connect token with axios header
            axios.defaults.headers.common['Authorization'] = token;
            // 3) redirect to the main page
            history.push("/home")
        } else {
            // update a state to show an error
            setError("Incorrect email or password")
        }
    }

    return (
        <div className="page">
            <img src="/logo.svg" className="logo"/>
            <div className="login_input">
                <Input header="Username"/>
                <Input header="Password" type="password" placeholder="*********"/>
            </div>
            <div className="login_but">
                <Button text="log in" bgcolor="#54BAF3"
                onClick={handleLogin}
                />
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