import React, { useState, useEffect } from "react";
import {useParams, useHistory} from 'react-router-dom';
import axios from "axios";

import Input from "comps/Input";
import Button from 'comps/Button/default';

function Login ({setToken}) {
    const history = useHistory();
    const [username, setUsername] = useState("");
    const [pwd, setPwd] = useState("");

    const [error, setError] = useState(null);
    // const [user, setUser] = useState("");

    const handleLogin = async () => {
        const resp = await axios.post("https://petsave-backend.herokuapp.com/api/login",{
            username: username,
            pwd: pwd
        });
        console.log(resp);
        if(resp.data !== "Unautorized" && resp.data !== "Incorrect credentials"){
            const token = resp.data.token;
            setToken(token);
            // // 1) store the token in the storage
            sessionStorage.setItem("token", token);
            // // 2) connect token with axios header
            axios.defaults.headers.common['Authorization'] = token;
            // // 3) redirect to the main page
            history.push("/home")
        } else {
            // update a state to show an error
            setError("Incorrect Email or Password")
        }
    }

    useEffect(() => {
        // handleLogin();
      }, []);


    return (
        <div className="page">
            <img src="/logo.svg" className="logo" alt="logo"/>
            <div className="login_input">
                <Input header="Username" onChange={(e)=>setUsername(e.target.value)}/>
                <Input header="Password" type="password" placeholder="*********" onChange={(e)=>setPwd(e.target.value)}/>
                {error && <p> {error} </p>}
            </div>
            <div className="login_but">
                <Button text="log in" bgcolor="#c4c4c4"
                disable={username === "" || pwd === ""}
                onClick={()=>{
                    handleLogin();
                    setUser(username);
                    setError("Incorrect Email or Password");
                }}
                />
                <div>
                    <p>Don't have an account?</p>
                    <Button text="register" disable={true}
                    onClick={()=>{
                        history.push("/register");
                    }}/>
                </div>
            </div>
        </div>
    )
};

export default Login;