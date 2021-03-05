import React, { useState } from 'react';
import styled from 'styled-components';
import {useParams, useHistory} from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import UserProfile from 'pages/userprofile';

const Container = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
min-width: 414px;
max-width: 414px;
height: 30px;
padding: 15px 60px 15px 60px;
background-color: #FFFFFF;
`;

const AddButton = styled.div`
position: relative;
top: -5px;
display: flex;
justify-content: center;
align-items: center;
min-height: 40px;
max-height: 40px;
min-width: 40px;
max-width: 40px;
background-color: #51C5F1;
border-radius: 12px;
cursor: pointer;
border: none;
`;

const IconCont = styled.div`
min-width: 30px;
max-width: 30px;
min-height: 30px;
max-height: 30px;
cursor: pointer;
border: none;
`;


const NavBar = ({home, profile, onHomeClick, profileIcon, onProfileClick}) => {

    const history = useHistory();
    
    const [homeClick, setHomeClick] = useState(false); 
    const [profileClick, setProfileClick] = useState(false);

    return <Router>
    
    <Container>
            {/* When user clicks the home_outline icon, the container will change the icon to home (filled) */}
            <Link to="/">
                <IconCont onChange={(e)=>{
                    setHomeClick(); 
                }}>
                    <img onClick={()=>{
                        onHomeClick(homeClick)
                        console.log(homeClick);
                    }} name="home" src='/icons/home_outline.svg' />
                </IconCont>
            </Link>

            <AddButton>
                    <img src='/icons/add.svg' fill="#FFFFFF" height="20px" width="20px" />
            </AddButton>

            {/* When user clicks the profile_outline icon, the container will change the icon to profile (filled) */}
            <Link to="/userprofile">
                <IconCont onChange={(e)=>{
                    setProfileClick(); 
                }}>
                    <img onClick={()=>{
                        // history.push("/userprofile");
                    }} name="profile" src={profileIcon} />
                </IconCont>
            </Link>
        </Container>
        </Router>
}

NavBar.defaultProps = {
    onHomeClick:()=>{},
    onProfileClick:()=>{},
    disable: false,
    profileIcon:"/icons/profile_outline.svg"
}

export default NavBar;    