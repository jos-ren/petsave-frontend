import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  margin: ${props=>props.margin ? props.margin : null}
`;

const NormalButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 366px;
  min-height: 64px;
  // background-color: #094D69;
  background-color: ${props=>props.disable && props.bgcolor ? props.bgcolor : "#c4c4c4"};

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

const Button = ({ text, onClick, margin, disable, bgcolor}) => {
    const [disabled, setDisabled] = useState(false);

    useEffect(() => {
      setDisabled(disable);
    }, [disable]);

  return (
    <Container margin={margin}>
      <NormalButton
      bgcolor={bgcolor}
        disable={disabled}
        onClick={() => {
            setDisabled(!disabled);
            onClick();
        }}
      >
        <Text>{text}</Text>
      </NormalButton>
    </Container>
  );
};

Button.defaultProps = {
  text: "create account",
  margin: null,
  bgcolor: "#000",
  disable: false,
  onClick:()=>{}
};

export default Button;