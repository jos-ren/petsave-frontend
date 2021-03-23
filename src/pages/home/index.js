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

    const params = useParams();
    const history = useHistory();

    const [posts, setPosts] = useState([]);
    const [username, setUsername] = useState("");
    const [postlikes, setPostLikes] = useState("");

    const getData = async () => {
        const resp = await axios.get("https://petsave-backend.herokuapp.com/api/posts");
        console.log(resp.data.posts)

        var token = await localStorage.getItem("token")
        if(token){
            axios.defaults.headers.common['Authorization'] = token;
            setPosts([...resp.data.posts]);
        } else {
            history.push("/login");
        }

        // const token = resp.data.token;
        // setToken(token);
        // if(resp.data !== "Unautorized" && resp.data !== "Incorrect credentials"){
        //     const token = resp.data.token;
            // setToken(token);
            // console.log("token", token);
        // }
    };

    // const getUserData = async () => {
    //     const resp = await axios.get("https://petsave-backend.herokuapp.com/api/users/"+params.id);
    //     console.log("get data", resp);
    //     console.log("params", params.id);
    // }

    const likePost = async () => {
        const resp = await axios.patch("https://petsave-backend.herokuapp.com/api/posts/"+params.id+"/likes",{
            likes: postlikes
        });        

        console.log("You liked this post!", resp);
        // getLikes();
    }

    useEffect(()=>{
        getData();
    }, [])

    return <div>
        <TopNav displaylogo="true" displayr="none" displayl="none" text="" />
        {posts.map ((o, i) =>
        <SinglePost
        key={i} 
        username={o.username}
        caption={o.caption}
        avatarimg={o.profile_pic}
        postimg={o.img_src}
        likes={o.likes}
        updateLikes={likePost}
        gotoProfile={()=>{
            history.push("/profile/"+o.username)
        }}
        gotoPost={()=>{
            history.push("/post/"+o.id)
        }}
        />
        )}
        <End>You've seen all posts</End>
        <NavBar iconl="/icons/home.svg" iconr="/icons/profile_outline.svg" />

    </div>
}

export default Home;