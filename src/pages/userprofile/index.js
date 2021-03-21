import React, { useState, useEffect } from "react";
import { useParams, useHistory } from 'react-router-dom';
import axios from "axios";

import TopNav from "comps/TopNav";
import NavBar from "comps/NavBar";
import ProfileInfo from "comps/ProfileInfo";
import HomeFeed from "comps/HomeFeed";

function UserProfile ({}) {

    const params = useParams();
    const history = useHistory();

    const [user, setUser] = useState({});
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [posts, setPosts] = useState([]);

    const getUserInfo = async () => {
        const resp = await axios.get("https://petsave-backend.herokuapp.com/api/users/"+params.username);
        console.log("get data", resp);
        console.log("params", params.id);

        var token = await localStorage.getItem("token")
        if(token){
            axios.defaults.headers.common['Authorization'] = token;
            setUser({...resp.data.result[0]});
            // console.log("token", token);
            }
    }

    const GetPosts = async () => {
        const resp = await axios.get("https://petsave-backend.herokuapp.com/api/users/" + params.username + "/posts");

        var token = await localStorage.getItem("token")
        if(token){
            axios.defaults.headers.common['Authorization'] = token;
            setPosts({ ...resp.data.posts[0]});
        } else {
            history.push("/login");
        }
    }

    useEffect(()=>{
        getUserInfo();
        GetPosts();
    }, []);

    return (
        <div className="profile_page">
        <TopNav displayl='none' iconright='/icons/settings.svg' />
        <ProfileInfo displayfollow='none' displaymsg='none' username="30px" imgurl='/img/hawk.jpg' />
        <HomeFeed />
            {posts.map((o, i) => <HomeFeed key={i} img={o.img_url}>
        </HomeFeed>)}
        <NavBar/>

    </div>
    )
};

export default UserProfile;