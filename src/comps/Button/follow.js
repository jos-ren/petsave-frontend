import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  margin: ${props=>props.margin ? props.margin : null};
  display: ${props => props.displayfollow ? props.displayfollow : ""};
`;

const ButtonBox = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 168px;
  min-height: 50px;
  // background-color: #094D69;
  background-color: ${props=>props.disable ? "#54BAF3" : "#000"};

  border-radius: 10px;

  cursor: pointer;
  border: none;

  &:hover{
    transform: ${props=>props.disable ? "scale(1.01)" : null};
    transition: ${props=>props.disable ? "transform 0.5s" : null};
    // background-color: ${props=>props.disable ? "#54BAF3" : null};
    // transition: ${props=>props.disable ? "background-color 0.5s" : null};
  }
`;

const Text = styled.h3`
  color: #fff;
  text-transform: capitalize;
`;

const FollowButton = ({onClick, margin, disable, bgcolor, displayfollow}) => {
    const [disabled, setDisabled] = useState(false);
    const [text, setText] = useState("follow");

    const changeText = () => {
      setDisabled(!disabled);
        if(disabled == false){
            setText("following");
        } else {
            setText("follow")
        }
    }

  return (
    <Container margin={margin} displayfollow={displayfollow}>
      <ButtonBox
      bgcolor={bgcolor}
      disable={disabled}
        onClick={() => {
            onClick();
            changeText();
        }}
      >
        <Text>{text}</Text>
      </ButtonBox>
    </Container>
  );
};

FollowButton.defaultProps = {
  margin: null,
  bgcolor: "#000",
  disable: false,
  onClick:()=>{},
  displayfollow: "flex"
};

export default FollowButton;