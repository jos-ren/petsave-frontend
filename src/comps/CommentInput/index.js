import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    align-items: center;
    min-width: 414px;
    min-height: 71px;
    background-color: white;
`;

const Avatar = styled.img`
    border-radius: 50%;
    width: 50px;
    height: 50px;
    margin-right: 10px;
`;

const Comment = styled.div`
    display: flex;
    align-items: center;
    input {
        min-width: 316px;
        min-height: 50px;
        border: none;
        box-sizing: border-box;
        box-shadow: 0px 0px 5px #C4C4C4;
        border-radius: 25px;
    }
    img {
        width: 37px;
        height: 37px;
        margin-left: -45px;
        cursor: pointer;
    }  
`;

const CmtInput = ({imgurl, onClick}) => {
    return <Container>
        <Avatar src={imgurl}/>
        <Comment>
            <input type="text" />
            <img src="/icons/submit.svg" alt="submit" onClick={onClick}/>
        </Comment>
    </Container>
}

CmtInput.defaultProps = {
    imgurl:"/icons/default_profile.svg",
};

export default CmtInput;