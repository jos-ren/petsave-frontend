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
    const [postlikes, setPostLikes] = useState("");

    const getData = async () => {
        const resp = await axios.get("https://petsave-backend.herokuapp.com/api/posts");
        console.log(resp.data.posts)

        var token = await localStorage.getItem("token")
        if (token) {
            axios.defaults.headers.common['Authorization'] = token;
            setPosts([...resp.data.posts]);
        } else {
            history.push("/login");
        }
    }

    const likePost = async () => {
        const resp = await axios.patch("https://petsave-backend.herokuapp.com/api/posts/" + params.id + "/likes", {
            likes: postlikes
        });

        console.log("You liked this post!", resp);
        getLikes();
    }

    const getLikes = async () => {
        const resp = await axios.get("https://petsave-backend.herokuapp.com/api/posts/" + params.id + "/likes");

        console.log("It worked", resp);

        var token = await localStorage.getItem("token")
        if (token) {
            axios.defaults.headers.common['Authorization'] = token;
            setPostLikes(resp.data);
        } else {
            history.push("/login");
        }
    }

    useEffect(() => {
        getData();
        getLikes();
    }, [])

    return <div>
        <TopNav displaylogo="true" displayr="none" displayl="none" text="" />
        {posts.map((o, i) =>
            <SinglePost
                key={i}
                username={o.username}
                caption={o.caption}
                avatarimg={o.profile_pic}
                postimg={o.img_src}
                likes={o.likes}
                gotoProfile={() => {
                    history.push("/profile/" + o.username)
                }}
                gotoPost={() => {
                    history.push("/post/" + o.id)
                }}
            />
        )}
        <End>You've seen all posts</End>
        <NavBar iconl="/icons/home.svg" iconr="/icons/profile_outline.svg" />

    </div>
}

export default Home;