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

    //Brittany's working on this .. NOT COMPLETE YET
    const [username, setUsername] = useState("");

    const handleFollow = async () => {
        const resp = await axios.patch("https://petsave-backend.herokuapp.com/api/following_accounts/"+params.user_id
        // , {
        //     fllwrs: follower + 1,
        //     fllwng: following
        // }
        );
        console.log(resp);

        var token = await localStorage.getItem("token")
        if(token){
            axios.defaults.headers.common['Authorization'] = token;
            setFollowing([...resp.data.follower_id]);
        } else {
            history.push("/login");
    }
    };

    const GetPosts = async () => {
        const resp = await axios.get("https://petsave-backend.herokuapp.com/api/users/" + params.username + "/posts");
        console.log("posts", resp.data.posts);

        var token = await localStorage.getItem("token")
        if(token){
            axios.defaults.headers.common['Authorization'] = token;
            setPosts([...resp.data.posts])
        } else {
            history.push("/login");
    }
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
            {posts.map((o, i) => 
            <HomeFeed key={i} img={o.img_src} onPostClick={()=>{
                history.push("/post/"+o.id)
            }}/>)}
            <NavBar />
        </div>
    )
};

export default Profile;