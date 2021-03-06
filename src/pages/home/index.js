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

function Home() {

    return <div>
        <TopNav displaylogo="true" displayr="none" displayl="none" text="" />
        <SinglePost />
        <SinglePost />
        <SinglePost />
        <SinglePost />
        <SinglePost />
        <SinglePost />
        <SinglePost />
        <SinglePost />
        <End>You've seen all posts</End>
        <NavBar />
    </div>
}

export default Home;