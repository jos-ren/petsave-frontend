import React, { useState, useEffect } from "react";
import styled, {css} from "styled-components";
import Button from 'comps/Button/default';

const Container = styled.div`
    max-width: 345px;
    max-height: 372px;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px #C4C4C4;
    border-radius: 10px;
    box-sizing: border-box;
    padding: 40px;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
`;

const CheckMark = styled.img`
    width: 105px;
    height: 105px;
`;

const PostCreated = styled.div`
    ${props=>props.reMove1 === true && css`
        display: none;
    `}
`;

const Logout = styled.div`
    ${props=>props.reMove2 === true && css`
        display: none;
    `}
`;

const ConfirmBox = ({text, reMove1, reMove2}) => {
  return <Container>

        <PostCreated reMove1={reMove1}>        
            <CheckMark src="/icons/check-solid 1.svg" />
        </PostCreated>

        <h2>{text}</h2>

        <PostCreated reMove1={reMove1}>
            <Button disable={true} text="Go to Home" width="257px" height="50px" />
        </PostCreated>

        <Logout reMove2={reMove2}>
            <Button disable={true} margin="12px" text="Yes, log out" width="257px" height="50px" />
            <Button disable={true} bgcolor="#54BAF3" text="No, go back Home" width="257px" height="50px" />
        </Logout>

    </Container>
};

ConfirmBox.defaultProps = {
    text: "Your post has been created!",
    reMove1: true,
    reMove2: true,
};

export default ConfirmBox;