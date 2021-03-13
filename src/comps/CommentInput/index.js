import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    align-items: center;
    min-width: 414px;
    min-height: 71px;
    background-color: white;
    padding: 0px 10px;
    button {
        min-width: 55px;
        min-height: 40px;
        border-radius: 16px;
        border: none;
        background-color: #54BAF3;
        color: white;
        box-sizing: border-box;
        margin-left: 6px;
        cursor: pointer;
    }
    // position: absolute;
    // bottom: 75px;
`;

const Comment = styled.div`
    display: flex;
    align-items: center;
    input {
        min-width: 300px;
        min-height: 40px;
        border: none;
        box-sizing: border-box;
        box-shadow: 0px 0px 5px #C4C4C4;
        border-radius: 16px;
    }
`;

const CmtInput = ({onChange, onClick}) => {
    return <Container>
        <Comment>
            <input type="text" onChange={onChange}/>
        </Comment>
        <button onClick={onClick}><h5>Send</h5></button>
    </Container>
}

CmtInput.defaultProps = {
    onChange:()=>{},
    onClick:()=>{}
};

export default CmtInput;