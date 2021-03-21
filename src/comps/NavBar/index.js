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

const IconCont = styled.img`
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


const NavBar = ({ }) => {

    const history = useHistory();
    const params = useParams();

    const [filled1, setFilled1] = useState(false);
    const [filled2, setFilled2] = useState(false);

    return <div>

        <Gap />
        <Container>
            <Line />
            <Box>
                <IconCont onClick={() => {
                    setFilled1(true)
                    history.push("/home")
                    }}
                    src={filled1 ? "/icons/home.svg" : "/icons/home_outline.svg"}>
                </IconCont>

                <AddButton onClick={() => {
                    history.push("/addpost")
                }}>
                    <img src='/icons/add.svg' fill="#FFFFFF" height="20px" width="20px" alt="add"/>
                </AddButton>

                <IconCont onClick={() => {
                    history.push("/myprofile")
                    setFilled2(true)
                    }} 
                    src={filled2 ? "/icons/profile.svg" : "/icons/profile_outline.svg"}>
                </IconCont>
            </Box>
        </Container>
    </div>
}

NavBar.defaultProps = {
    onClick:()=>{},
    disable: false,
}

export default NavBar;