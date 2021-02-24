import React, { useState } from 'react';
import styled from 'styled-components';
import {ReactComponent as Add} from '../../icons/add.svg';

const Container = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
width: 366px;
height: 366px;
border-radius: 36px;
background-color: #000000;
`;

const AddPhoto = ({onContainerSelect}) => {

    return <Container>
        <Add fill="#FFFFFF" height="65px" width="65px" />
    </Container>
}

AddPhoto.defaultProps = {
}

export default AddPhoto;