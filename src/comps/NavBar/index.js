import React, { useState } from 'react';
import styled from 'styled-components';
import home_outline from '../../icons/home_outline.svg';
import profile_outline from '../../icons/profile_outline.svg';
import {ReactComponent as Add} from '../../icons/add.svg';

const Container = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
height: 30px;
padding: 15px 60px 15px 60px;
background-color: #FFFFFF;
border: 1px solid #D3D3D3;
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
background-color: #FF9E50;
border-radius: 12px;
`;

const IconCont = styled.div`
min-width: 30px;
max-width: 30px;
min-height: 30px;
max-height: 30px;
`;


const NavBar = ({home, profile, onHomeClick, onProfileClick}) => {

    const [homeClick, setHomeClick] = useState(false); 
    const [profileClick, setProfileClick] = useState(false);

    return <Container>
        {/* When user clicks the home_outline icon, the container will change the icon to home (filled) */}
        <IconCont onChange={(e)=>{
            setHomeClick(); //Need to figure out how to replace images again. I forget..
        }}>
            <img onClick={()=>{
                onHomeClick(homeClick)
                console.log(homeClick);
            }} name="home" src={home} />
        </IconCont>

        <AddButton>
                <Add fill="#FFFFFF" height="20px" width="20px" />
        </AddButton>

        {/* When user clicks the profile_outline icon, the container will change the icon to profile (filled) */}
        <IconCont onChange={(e)=>{
            setProfileClick(); //Need to figure out how to replace images again. I forget..
        }}>
            <img onClick={()=>{
                onProfileClick(profileClick)
                console.log(profileClick);
            }} name="profile" src={profile} />
        </IconCont>
    </Container>
}

NavBar.defaultProps = {
    home: home_outline,
    profile: profile_outline,
    onHomeClick:()=>{},
    onProfileClick:()=>{}
}

export default NavBar;    