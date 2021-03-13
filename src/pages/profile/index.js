import React, { useState, useEffect } from "react";
import {useParams, useHistory} from 'react-router-dom';
import axios from "axios";

import TopNav from "comps/TopNav";
import NavBar from "comps/NavBar";
import ProfileInfo from "comps/ProfileInfo";
import HomeFeed from "comps/HomeFeed";
import Button from 'comps/Button/default';

function Profile ({}) {
    const history = useHistory();
    const params = useParams();

    const [follower, setFollower] = useState(null);
    const [following, setFollowing] = useState(null);

    const handleFollow = async () => {
        const resp = await axios.patch("https://petsave-backend.herokuapp.com/api/users/"+params.id, {
            followers: follower+1,
            fllwng: following
        });
        console.log(resp);
    };

    // const handleFollow = () => {
    //     var result = following+1;
    //     console.log(result);
    // }

    return (
        <div className="profile_page">
            <TopNav displayr='none'/>
            <ProfileInfo onFollow={handleFollow}/>
            <HomeFeed />
            <NavBar />
        </div>
    )
};

export default Profile;