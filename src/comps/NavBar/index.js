import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
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
            }} name="home" src='/icons/home_outline.svg' />
        </IconCont>

        <AddButton>
                <img src='/icons/add.svg' fill="#FFFFFF" height="20px" width="20px" />
        </AddButton>

        {/* When user clicks the profile_outline icon, the container will change the icon to profile (filled) */}
        <IconCont onChange={(e)=>{
            setProfileClick(); //Here too.
        }}>
            <img onClick={()=>{
                onProfileClick(profileClick)
                console.log(profileClick);
            }} name="profile" src='/icons/profile_outline.svg' />
        </IconCont>
    </Container>
}

NavBar.defaultProps = {
    onHomeClick:()=>{},
    onProfileClick:()=>{}
}

export default NavBar;    