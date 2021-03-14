import React, { useState, useEffect } from "react";
import { useParams, useHistory } from 'react-router-dom';
import axios from "axios";

import TopNav from "comps/TopNav";
import NavBar from "comps/NavBar";
import ProfileInfo from "comps/ProfileInfo";
import HomeFeed from "comps/HomeFeed";
import Button from 'comps/Button/default';

function Profile({ }) {
    const history = useHistory();
    const params = useParams();

    const [follower, setFollower] = useState(null);
    const [following, setFollowing] = useState(null);
    const [posts, setPosts] = useState([]);

    const handleFollow = async () => {
        const resp = await axios.patch("https://petsave-backend.herokuapp.com/api/users/" + params.id, {
            followers: follower + 1,
            fllwng: following
        });
        console.log(resp);
    };

    const GetPosts = async () => {
        const resp = await axios.get("https://petsave-backend.herokuapp.com/api/users/1/posts");
        // if (resp.data !== "expired" && resp.data !== "no token") {
            setPosts([...resp.data])
            console.log("posts", resp);
        // } 
    }

    useEffect(() => {
        GetPosts();
    }, [])

    return (
        <div className="profile_page">
            <TopNav displayr='none' />
            <ProfileInfo onFollow={handleFollow} />
            <HomeFeed />
            {posts.map((o, i) => <HomeFeed key={i} img={o.img_url}>
            </HomeFeed>)}
            <NavBar />
        </div>
    )
};

export default Profile;