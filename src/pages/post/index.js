import React, { useState, useEffect } from "react";
import { useParams, useHistory } from 'react-router-dom';
import axios from "axios";
import styled from 'styled-components';
import SinglePost from "comps/SinglePost";
import NavBar from "comps/NavBar";
import TopNav from "comps/TopNav";
import Comment from "comps/Comment";


const Container = styled.div`
background-color:#F0EEFF;
`;

const PostBox = styled.div`
background-color:white;
padding-bottom:24px;
border-radius: 0px 0px 40px 40px;
`;

function Post() {

    return <Container>
        <TopNav text="Post" displayr="none" iconleft="/icons/back_outline.svg" />
        <PostBox>
            <SinglePost displayline="none" />
        </PostBox>
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <NavBar />
    </Container>
}

export default Post;