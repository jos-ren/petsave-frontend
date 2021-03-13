import React, {useState, useEffect} from "react";
import styled from 'styled-components';
import SinglePost from "comps/SinglePost";
import NavBar from "comps/NavBar";
import TopNav from "comps/TopNav";
import Comment from "comps/Comment";
import CmtInput from "comps/CommentInput";

import axios from 'axios';

const Container = styled.div`
background-color:#F0EEFF;
`;

const PostBox = styled.div`
background-color:white;
padding-bottom:24px;
border-radius: 0px 0px 40px 40px;
`;

function Post() {

    const [comment, setComment] = useState("");

    // also get token!

    const createComment = async () => {
        const resp = await axios.post("https://petsave-backend.herokuapp.com/api/post/comment",{
            content: comment
        });
        console.log(resp);
    }

    return <Container>
        <TopNav text="Post" displayr="none" iconleft="/icons/back_outline.svg" />
        <PostBox>
            <SinglePost displayline="none" />
        </PostBox>
         {/* real comments will be displayed once we have our db up */}
        <Comment />
        <CmtInput onChange={(e)=>setComment(e.target.value)} onClick={createComment}/>
        <NavBar />
    </Container>
}

export default Post;