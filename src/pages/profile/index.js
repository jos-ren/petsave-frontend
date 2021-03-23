import React, { useState, useEffect } from "react";
import { useParams, useHistory } from 'react-router-dom';
import axios from "axios";
import styled from 'styled-components';

import TopNav from "comps/TopNav";
import NavBar from "comps/NavBar";
import ProfileInfo from "comps/ProfileInfo";

const ImgCont = styled.div`
object-fit: contain;
img{
    border-radius:16px;
    width:100%;
    object-fit: cover;
    cursor:pointer;
}
`;

const Box = styled.div`
margin:0px 24px;
gap: 12px 12px;
display: grid;
grid-template-columns: 1fr 1fr;
`;

function Profile({ }) {
    const history = useHistory();
    const params = useParams();
    const [posts, setPosts] = useState([]);
    const [user, setUser] = useState({});



    const GetPosts = async () => {
        const resp = await axios.get("https://petsave-backend.herokuapp.com/api/users/" + params.username + "/posts");
        console.log("posts", resp.data.posts);

        var token = await localStorage.getItem("token")
        if (token) {
            axios.defaults.headers.common['Authorization'] = token;
            setPosts([...resp.data.posts])
        } else {
            history.push("/login");
        }
    }

    const getUserData = async () => {
        const resp = await axios.get("https://petsave-backend.herokuapp.com/api/users/" + params.username);

        var token = await localStorage.getItem("token")
        if (token) {
            axios.defaults.headers.common['Authorization'] = token;
            setUser({ ...resp.data.result[0] });
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
            <TopNav displayr='none' text={"@" + user.username} />
            <ProfileInfo
                name={user.fullname}
                imgurl={user.profile_pic}
                bio={user.bio}
                onEmail={() => {
                    history.push("mailto:" + user.email)
                }}
            />
            <Box>
                {posts.map((o, i) =>
                    <ImgCont key={i} onClick={() => {
                        history.push("/post/" + o.id)
                    }} >
                        <img className="img" src={o.img_src} />
                    </ImgCont>
                )}
            </Box>
            <NavBar iconl="/icons/home_outline.svg" iconr="/icons/profile_outline.svg" />
        </div>
    )
};

export default Profile;