import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
width: 100%;
`;

const InputDiv = styled.input`
    height: 50px;
    width: 100%;
    background: #F8FAFA;
    border: 0.25px solid rgba(0, 0, 0, 0.25);
    box-sizing: border-box;
    border-radius: 16px;
    margin-bottom:24px;
    margin-top:12px;
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: 14px;
    padding-left:20px;
:focus{
    outline: none;
    background: #F8FAFA;
    border: 0.25px solid #54BAF3;
    box-shadow: 0px 0px 10px rgba(84, 186, 243, 0.2);
    border-radius: 16px;
}
`;

const Input = ({ header, id, placeholder, type }) => {
    return <Container>
        <h3> {header} </h3>
        <InputDiv type={type} placeholder={placeholder} id={id} />
    </Container>
};

Input.defaultProps = {
    header: "Name",
    id: "name",
    type:"text",
    placeholder:"joesmith"
};

export default Input;