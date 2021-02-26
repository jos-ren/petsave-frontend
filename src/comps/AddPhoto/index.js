import React, { useState } from 'react';
import styled from 'styled-components';
import {ReactComponent as Add} from '../../icons/add.svg';

const Container = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
max-width: ${props=>props.width ? props.width : "366px"};
min-width:${props=>props.width ? props.width : "366px"};
max-height: ${props=>props.height ? props.height : "366px"};
min-height: ${props=>props.height ? props.height : "366px"};
border-radius: 36px;
background-color: #000000;
`;

const AddPhoto = ({width, height, onAddPhotoClick}) => {

    const [uploadClick, setUploadClick] = useState(false); 

    return <Container width={width} height={height} onChange={(e)=>{
        setUploadClick(); //Changes when user uploads a photo
    }}>
        <Add fill="#FFFFFF" height="65px" width="65px" onClick={()=>{
        onAddPhotoClick(uploadClick)
        console.log(uploadClick);
    }}/>
    </Container>
}

AddPhoto.defaultProps = {
    width: null,
    height: null,
    onAddPhotoClick:()=>{}
}

export default AddPhoto;