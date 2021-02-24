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
height: 40px;
width: 40px;
background-color: #FF9E50;
border-radius: 12px;
`;

const NavBar = ({ option, onContainerSelect}) => {

    return <Container>
        <img src={home_outline} />
        <AddButton>
                <Add fill="#FFFFFF" height="20px" width="20px" />
        </AddButton>
        <img src={profile_outline} />
    </Container>
}

NavBar.defaultProps = {
}

export default NavBar;    