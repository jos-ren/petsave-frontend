import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  // margin: 10px 0px;
  margin: ${props=>props.margin ? props.margin : null}
`;

const NormalButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  min-width: ${props=>props.width ? props.width: "308px"};
  max-height: 81px;
  min-height: ${props=>props.height ? props.height : "81px"};
  // background-color: #094D69;
  background-color: ${(props) => (props.bgcolor ? props.bgcolor : "#094D69")};

  border-radius: 10px;

  cursor: pointer;
  border: none;

  &:hover, &:select {
    opacity: 0.8;
    transition: opacity 0.2s;
  }
`;

const Text = styled.h2`
  color: #ffffff;
`;

const Button = ({ text, bgcolor, onClick, width, margin, height}) => {
  return (
    <Container onClick={onClick} margin={margin}>
      <NormalButton bgcolor={bgcolor} width={width} height={height}>
        <Text>{text}</Text>
      </NormalButton>
    </Container>
  );
};

Button.defaultProps = {
  text: "Go to Home",
  bgcolor: null,
  width: null,
  margin: null,
  height: null
};

export default Button;