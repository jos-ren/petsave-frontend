import React, { useState, useEffect } from "react";
import { useParams, useHistory } from 'react-router-dom';
import axios from "axios";

import styled from 'styled-components';
import SinglePost from "comps/SinglePost";
import NavBar from "comps/NavBar";
import TopNav from "comps/TopNav";

const End = styled.h3`
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

function Home({setToken}) {

    const params = useParams();
    const history = useHistory();

    const getData = async () => {
        const resp = await axios.get("https://petsave-backend.herokuapp.com/api/posts");
        console.log(resp);

        var token = await localStorage.getItem("token")
        if(token){
            axios.defaults.headers.common['Authorization'] = token;
            }

        // const token = resp.data.token;
        // setToken(token);
        // if(resp.data !== "Unautorized" && resp.data !== "Incorrect credentials"){
        //     const token = resp.data.token;
            // setToken(token);
            // console.log("token", token);
        // }
    }

    useEffect(()=>{
        getData();
    }, [])

    return <div>
        <TopNav displaylogo="true" displayr="none" displayl="none" text="" />
        {/* real posts will be displayed once we have our db up */}
        <SinglePost />
        <SinglePost />
        <SinglePost />
        <SinglePost />
        <SinglePost />
        <SinglePost />
        <SinglePost />
        <SinglePost />
        <End>You've seen all posts</End>
        <NavBar onProfileClick={()=>{
            history.push("/userprofile/"+params.id)
        }}/>
    </div>
}

export default Home;