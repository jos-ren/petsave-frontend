import React, { useState, useEffect } from "react";
import { useParams, useHistory, useLocation } from 'react-router-dom';
import axios from "axios";

import TopNav from "comps/TopNav";
import NavBar from "comps/NavBar";
import ProfileInfo from "comps/ProfileInfo";
import HomeFeed from "comps/HomeFeed";
import AddPhoto from "comps/AddPhoto";
import Backdrop from "comps/Backdrop";
import Button from "comps/Button/default";
import Input from "comps/Input";
import ConfirmBox from "comps/Confirm";

function UserProfile ({}) {

    const params = useParams();
    const history = useHistory();
    const location = useLocation();

    const [user, setUser] = useState({});
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");

    const [popup, setPopup] = useState(false);
    const [confirm, setConfirm] = useState(false);
    const setBoth = () => {
      setPopup(true);
      setConfirm(true);
    };

    const getUserInfo = async () => {
        const resp = await axios.get("https://petsave-backend.herokuapp.com/api/user");
        console.log("get data", resp);

        var token = await localStorage.getItem("token")
        if(token){
            axios.defaults.headers.common['Authorization'] = token;
            setUser({...resp.data});
            console.log("token", user);
            }
    }

    useEffect(()=>{
        getUserInfo();
    }, []);

    if(location.pathname === "/myprofile/edit"){
        return(
            <div className="page">

            {popup ? <Backdrop /> : null}
            {confirm ? <ConfirmBox reMove2="false" text="Are you sure?" /> : null}

            <TopNav displayr="none" />
            <AddPhoto />
            <Input />
            <Input header="Email" placeholder="Enter your new email" />
            <Input header="Username" placeholder="Enter your new username" />
            <Input header="Password" placeholder="Enter your new password" />
            <Button margin="12px" text="Save" bgcolor="#54BAF3" disable="true"
            onClick={() => {
                history.back()
            }}
            />
            <Button margin="12px" text="Log Out" disable="true"
            onClick={() => setBoth()} />
            </div>
        )
    } else {
        return (
        <div className="profile_page">
        <TopNav displayl='none' iconright='/icons/settings.svg' 
        text={"@"+user.username}
        onClick={()=>{
            history.push("/myprofile/edit")
        }}
        />
        <ProfileInfo displayfollow='none' displaymsg='none' username="30px" imgurl='/img/hawk.jpg' 
        name={user.fullname}
        imgurl={user.profile_pic}
        numpost={user.numposts}
        numfollower={user.fllwrs}
        numfollow={user.fllwng}
        />
        <HomeFeed />
        <NavBar profileIcon='icons/profile.svg' />

    </div>
    )
    }
};

export default UserProfile;