import React, {useState, useEffect} from "react";
import styled from 'styled-components';
import SinglePost from "comps/SinglePost";
import NavBar from "comps/NavBar";
import TopNav from "comps/TopNav";
import Comment from "comps/Comment";
import CmtInput from "comps/CommentInput";

import axios from 'axios';
import { useParams, useHistory } from "react-router";

const Container = styled.div`
background-color:#F0EEFF;
`;

const PostBox = styled.div`
background-color:white;
padding-bottom:24px;
border-radius: 0px 0px 40px 40px;
`;

function Post() {

    const params = useParams();
    const history = useHistory();

    const [comment, setComment] = useState("");
    const [post, setPost] = useState({});


    const createComment = async () => {
        const resp = await axios.post("https://petsave-backend.herokuapp.com/api/post/comment",{
            content: comment
        });
        console.log(resp);
    }

    const getData = async () => {
        const resp = await axios.get("https://petsave-backend.herokuapp.com/api/posts/"+params.id);
        console.log(resp.data.posts)

        var token = await localStorage.getItem("token")
        if(token){
            axios.defaults.headers.common['Authorization'] = token;
            setPost({...resp.data.posts[0]});
        } else {
            history.push("/login");
        }
    }

    useEffect(()=>{
        getData();
    }, [])

    return <Container>
        <TopNav text="Post" displayr="none" iconleft="/icons/back_outline.svg" />
        <PostBox>
            <SinglePost displayline="none"
            username={post.username}
            caption={post.caption}
            avatarimg={post.profile_pic}
            postimg={post.img_src}
            likes={post.likes}
            />
        </PostBox>
         {/* real comments will be displayed once we have our db up */}
        <Comment />
        <CmtInput onChange={(e)=>setComment(e.target.value)} onClick={createComment}/>
        <NavBar />
    </Container>
}

export default Post;