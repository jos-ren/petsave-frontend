import React, { useState, useEffect } from "react";
import {useParams, useHistory} from 'react-router-dom';
import axios from "axios";

import TopNav from "comps/TopNav";
import NavBar from "comps/NavBar";
import ProfileInfo from "comps/ProfileInfo";
import HomeFeed from "comps/HomeFeed";
import Button from 'comps/Button/default';

function UserProfile ({}) {
    const history = useHistory();

    return (
        <div className="page">
        <TopNav displayl='none' iconright='/icons/settings.svg' />
        <ProfileInfo displayfollow='none' displaymsg='none' username="30px" />
        <HomeFeed />
        <NavBar profileIcon='icons/profile.svg' />

    </div>
    )
};

export default UserProfile;