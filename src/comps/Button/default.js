import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: ${props => props.margin ? props.margin : null};
`;

const NormalButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: ${props => props.width ? props.width : "366px"};
  min-height: ${props => props.height ? props.height : "64px"};
  background-color: ${props => props.disable && props.bgcolor ? props.bgcolor : "#c4c4c4"};
  border-radius: 10px;
  cursor: pointer;
  border: none;

  &:hover{
    transform: ${props => props.disable ? "scale(1.01)" : null};
    transition: ${props => props.disable ? "transform 0.5s" : null};
    // background-color: ${props => props.disable ? "#54BAF3" : null};
    // transition: ${props => props.disable ? "background-color 0.5s" : null};
  }
`;

const Text = styled.h3`
  color: #fff;
  text-transform: capitalize;
`;

const Button = ({ text, onClick, margin, disable, bgcolor, width, height, type }) => {
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    setDisabled(disable);
  }, [disable]);

  return (
    <Container margin={margin}>
      <NormalButton
        type={type}
        bgcolor={bgcolor}
        width={width}
        height={height}
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
  onClick: () => { }
};

export default Button;