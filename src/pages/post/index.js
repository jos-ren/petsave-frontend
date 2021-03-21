import React, {useState, useEffect} from "react";
import styled from 'styled-components';
import SinglePost from "comps/SinglePost";
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

    const [comments, setComments] = useState([]);
    const [post, setPost] = useState({});
    const [like, setLike] = useState("");
    const [comment, setComment] = useState("");


    // const createComment = async () => {
    //     const resp = await axios.post("https://petsave-backend.herokuapp.com/api/post/comment",{
    //         content: comment,
    //         post_id: post.id
    //     });
    //     console.log(resp);
    // };

    const createComment = () => {
        console.log(comment, post.id);
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
    };

    const getComments = async () => {
        const resp = await axios.get("https://petsave-backend.herokuapp.com/api/posts/"+params.id+"/comments");
        console.log(resp.data.comments);

        var token = await localStorage.getItem("token")
        if(token){
            axios.defaults.headers.common['Authorization'] = token;
            setComments([...resp.data.comments]);
        } else {
            history.push("/login");
        }
    }


    //Brittany's questionable update Likes function lol
    const LikePost = async () => {
        const resp = await axios.patch("https://petsave-backend.herokuapp.com/api/posts/1/likes")
        // Why is "likes" greyed out?
        // likes: like + 1;
    console.log(resp);
};
    

    useEffect(()=>{
        getData();
        getComments();
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
            updateLikes={LikePost}
            gotoProfile={()=>{
                history.push("/profile/"+post.id)
            }}
            />
        </PostBox>
         {/* real comments will be displayed once we have our db up   (Brittany tried working on the comments below) */} 
         {comments.map((o, i) => 
            <Comment 
                key={i}
                comment={o.content}
                user_id={o.user_id}
                post_id={o.post_id}
                created={o.created}
                username={o.username}
                pfpic={o.profile_pic}
            >
            </Comment>)}
        <CmtInput 
        onChange={(e)=>setComment(e.target.value)}
         onClick={createComment}/>
    </Container>
}

export default Post;