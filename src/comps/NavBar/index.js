import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory, useParams } from 'react-router-dom';

const Container = styled.div`
display: flex;
flex-direction:column;
justify-content: center;
align-items: center;
height: 75px;
width: 100%;
background-color:white;
// padding: 15px 0px 15px 0px;
// background-color: #FFFFFF;
position:absolute;
bottom:0px;
right:0px;
filter: drop-shadow(0px -1px 20px rgba(0, 0, 0, 0.1));
`;

const Box = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
width: 100%;
height: 50px;
`;

const AddButton = styled.div`
position: relative;
display: flex;
justify-content: center;
align-items: center;
min-height: 50px;
max-height: 50px;
min-width: 50px;
max-width: 50px;
background-color: #51C5F1;
border-radius: 20px;
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
margin-left:36px;
margin-right:36px;
display: flex;
justify-content: center;
align-items: center;
`;

const Gap = styled.div`
    height: 76px;
`;

const Line = styled.div`
    width: 100%;
    height: 1px;
    background-color: rgba(0, 0, 0, 0.1);
    position:relative;
    top:-13px;
`;


const NavBar = ({ home, profile, onHomeClick, profileIcon, onProfileClick }) => {

    const history = useHistory();
    const params = useParams();

    const [homeClick, setHomeClick] = useState(false);
    const [profileClick, setProfileClick] = useState(false);

    return <div>

        <Gap />
        <Container>
            <Line />
            <Box>
                {/* When user clicks the home_outline icon, the container will change the icon to home (filled) */}
                <IconCont onClick={() => {
                    history.push("/home")
                }}
                    onChange={(e) => {
                        setHomeClick();
                    }}>
                    <img onClick={() => {
                    }} name="home" src='/icons/home_outline.svg' />
                </IconCont>

                <AddButton onClick={() => {
                    history.push("/addpost")
                }}>
                    <img src='/icons/add.svg' fill="#FFFFFF" height="20px" width="20px" />
                </AddButton>

                {/* When user clicks the profile_outline icon, the container will change the icon to profile (filled) */}
                <IconCont onClick={onProfileClick}
                    onChange={(e) => {
                        setProfileClick();
                    }}>
                    <img onClick={() => {
                    }} name="profile" src={profileIcon} />
                </IconCont>
            </Box>
        </Container>
    </div>
}

NavBar.defaultProps = {
    onHomeClick: () => { },
    onProfileClick: () => { },
    disable: false,
    profileIcon: "/icons/profile_outline.svg"
}

export default NavBar;