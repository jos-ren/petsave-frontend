import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    display: ${props => props.displaymsg ? props.displaymsg : ""};
`;

const ButtonBox = styled.button`
    min-width: 50px;
    min-height: 50px;
    background-color: ${props=>props.bgcolor ? props.bgcolor : "#000"};
    border-radius: 20px;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Icon = styled.img`
    min-width: 24px;
    height: auto;
`;

const RoundButton = ({ imgurl, onClick, bgcolor, displaymsg}) => {

  return (
    <Container displaymsg={displaymsg}>
      <ButtonBox
      bgcolor={bgcolor}
      onClick={onClick}
      >
        <Icon src={imgurl}></Icon>
      </ButtonBox>
    </Container>
  );
};

RoundButton.defaultProps = {
  text: "create account",
  bgcolor: "#000",
  imgurl: "/icons/mail.svg",
  onClick:()=>{},
  displaymsg: "flex"
};

export default RoundButton;