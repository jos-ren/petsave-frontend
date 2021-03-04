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

    return (
        <div className="page">
            <TopNav displayr='none'/>
            <ProfileInfo />
            <HomeFeed />
            <NavBar />

        </div>
    )
};

export default Profile;