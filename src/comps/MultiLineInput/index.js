import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    margin-left:24px;
`;

const InputDiv = styled.textarea`
    height: 100px;
    width: 366px;
    background: #F8FAFA;
    border: 0.25px solid rgba(0, 0, 0, 0.25);
    box-sizing: border-box;
    border-radius: 16px;
    margin-bottom:24px;
    margin-top:12px;
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: 14px;
    padding:12px;
    resize: none;
:focus{
    outline: none;
    background: #F8FAFA;
    border: 0.25px solid #54BAF3;
    box-shadow: 0px 0px 10px rgba(84, 186, 243, 0.2);
    border-radius: 16px;
}
`;

const MultiLineInput = ({ header, id, onChange }) => {
    return <Container>
        <h3> {header} </h3>
        <InputDiv id={id} onChange={onChange} />
    </Container>
};

MultiLineInput.defaultProps = {
    header: "Name",
    id: "name",
    onChange:()=>{}
};

export default MultiLineInput;