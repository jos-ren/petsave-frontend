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
import { LogoutConfirm } from "stories/Confirm.stories";

function UserProfile({ }) {

    const params = useParams();
    const history = useHistory();
    const location = useLocation();

    const [user, setUser] = useState({});
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [pwd, setPwd] = useState("");
    const [email, setEmail] = useState("");
    const [imgurl, setImgurl] = useState(null);
    const [image, setImage] = useState("");
    const [posts, setPosts] = useState([]);

    const [popup, setPopup] = useState(false);
    const [confirm, setConfirm] = useState(false);
    const setBoth = () => {
        setPopup(true);
        setConfirm(true);
    };

    const getUserInfo = async () => {
        const resp = await axios.get("https://petsave-backend.herokuapp.com/api/user");
        console.log("get data", resp);
        console.log("get data", resp.data.user[0].id);

        var token = await localStorage.getItem("token")
        if (token) {
            axios.defaults.headers.common['Authorization'] = token;
            setUser({ ...resp.data.user[0] });
        } else {
            history.push("/login");
        }
    }

    const GetPosts = async () => {
        const resp = await axios.get("https://petsave-backend.herokuapp.com/api/users/" + params.username + "/posts");
        console.log("posts", resp.data);

        var token = await localStorage.getItem("token")
        if(token){
            axios.defaults.headers.common['Authorization'] = token;
            setPosts([...resp.data.posts])
        } else {
            history.push("/login");
        }
    }

    const updateData = async () => {
        const resp = await axios.patch("https://petsave-backend.herokuapp.com/api/user_edit/" + params.username, {
            fullname: name,
            username: username,
            email: email,
            pwd: pwd,
            profile_pic: image
        });
        console.log("edited", resp);

        var token = await localStorage.getItem("token")
        if (token) {
            axios.defaults.headers.common['Authorization'] = token;
        } else {
            history.push("/login")
        }
    }
    const logOutUser = async () => {
        var token = await localStorage.removeItem("token")
        history.push("/login")
    }

    useEffect(() => {
        getUserInfo();
        GetPosts();
    }, []);

    // if (location.pathname === "/myprofile/edit") {
    //     return (
    //         <div className="page">

    //             {popup ? <Backdrop /> : null}
    //             {confirm ? <ConfirmBox reMove2="false" text="Are you sure?" onLogout={logOutUser} /> : null}

    //             <TopNav displayr="none" />
    //             <AddPhoto
    //                 filename={image}
    //                 onChange={
    //                     e => {
    //                         setImage(e.target.files[0])
    //                         setImgurl(URL.createObjectURL(e.target.files[0]))
    //                     }
    //                 }
    //                 image={imgurl}
    //             />
    //             <Input placeholder={user.fullname}
    //                 onChange={(e) => setName(e.target.value)} />
    //             <Input header="Email" placeholder={user.email}
    //                 onChange={(e) => setEmail(e.target.value)} />
    //             <Input header="Username" placeholder={user.username}
    //                 onChange={(e) => setUsername(e.target.value)} />
    //             <Input header="Password" type="password" placeholder="Enter your new password"
    //                 onChange={(e) => setPwd(e.target.value)} />
    //             <Button margin="12px" text="Save" bgcolor="#54BAF3" disable="true"
    //                 onClick={() => {
    //                     updateData();
    //                 }}
    //             />
    //             <Button margin="12px" text="Log Out" disable="true"
    //                 onClick={() => {
    //                     setBoth();
    //                 }} />
    //         </div>
    //     )
    // } else {
        return (
            <div className="profile_page">
                <TopNav displayl='none' iconright='/icons/settings.svg'
                    text={"@" + user.username}
                    onClick={() => {
                        history.push("/myprofile/edit")
                    }}
                />
                <ProfileInfo displayfollow='none' displaymsg='none' username="30px" imgurl='/img/hawk.jpg'
                    name={user.fullname}
                    imgurl={user.profile_pic}
                    bio={user.bio}
                />
                
                {posts.map((o, i) => 
                <HomeFeed key={i} img={o.img_src} onPostClick={()=>{
                    history.push("/post/"+o.id)
                }}/>)}

                <NavBar profileIcon='icons/profile.svg' />

            </div>
        )
};

export default UserProfile;