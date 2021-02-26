import React, { useState, useEffect } from "react";
import styled from "styled-components";


const Icon = styled.img`
    width: 24px;
    height: 24px;
    cursor: pointer;
`;

const LikeButton = ({onClick, toggleImage}) => {

    function toggleImage() {
        var img1 = "/icons/heart_outline.svg";
        var img2 = "/icons/heart.svg";
        
        var imgElement = document.getElementById('toggleImage');
     
        imgElement.src = (imgElement.src === img1)? img2 : img1;
     }

  return (
    <Icon 
        src="/icons/heart_outline.svg" id="toggleImage" onClick="toggleImage();" >
    </Icon>
  );
};

LikeButton.defaultProps = {
};

export default LikeButton;