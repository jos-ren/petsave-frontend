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
    const [user, setUser] = useState({});

    const [username, setUsername] = useState("");

    const handleFollow = async () => {
        const resp = await axios.patch("https://petsave-backend.herokuapp.com/api/users/" + params.id, {
            followers: follower + 1,
            fllwng: following
        });
        console.log(resp);
    };

    const GetPosts = async () => {
        const resp = await axios.get("https://petsave-backend.herokuapp.com/api/users/" + params.id + "/posts");
        // if (resp.data !== "expired" && resp.data !== "no token") {
        //     setPosts([...resp.data])
        //     console.log("posts", resp);
        // } 
    }

    const getUserData = async () => {
        const resp = await axios.get("https://petsave-backend.herokuapp.com/api/users/"+params.username);
        // console.log(resp);

        var token = await localStorage.getItem("token")
        if(token){
            axios.defaults.headers.common['Authorization'] = token;
            setUser({...resp.data.result[0]});
        } else {
            history.push("/login");
        }
    }

    useEffect(() => {
        GetPosts();
        getUserData();
    }, [])

    return (
        <div className="profile_page">
            <TopNav displayr='none' text={"@"+user.username} />
            <ProfileInfo 
            onFollow={handleFollow}
            name={user.fullname}
            imgurl={user.profile_pic}
            numpost={user.numposts}
            numfollower={user.fllwrs}
            numfollow={user.fllwng}
            />
            <HomeFeed />
            {posts.map((o, i) => <HomeFeed key={i} img={o.img_url}>
            </HomeFeed>)}
            <NavBar />
        </div>
    )
};

export default Profile;