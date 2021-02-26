import React, { useState, useEffect } from "react";
import styled from "styled-components";
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
    align-content:center;
`;

const CheckMark = styled.img`
    width: 105px;
    height: 105px;
`;

const ConfirmBox = ({text}) => {
  return <Container>
        <CheckMark src="/icons/check-solid 1.svg" />
        <h2>{text}</h2>
        <div>
            <Button text="Go to Home" />
        </div>
    </Container>
};

ConfirmBox.defaultProps = {
    text: "Your post has been created!",
};

export default ConfirmBox;