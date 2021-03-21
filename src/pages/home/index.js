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

    useEffect(()=>{
        getData();
        console.log("params", params.id);
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
        gotoProfile={()=>{
            history.push("/profile/"+o.username)
        }}
        gotoPost={()=>{
            history.push("/post/"+o.id)
        }}
        />
        )}
        <End>You've seen all posts</End>
        <NavBar filled1="true"/>

    </div>
}

export default Home;