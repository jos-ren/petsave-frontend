import React from "react";
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
        <NavBar />
    </div>
}

export default Home;