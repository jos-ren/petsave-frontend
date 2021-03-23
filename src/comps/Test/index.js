import React, { useState, useEffect } from "react";
import styled from "styled-components";

const LikesIcon = () => {
    const [lightMode, setLightMode ] = React.useState(false)
  
    return <div>
              <img
                onClick={() => setLightMode(prevMode => !prevMode)
                  // useState(true);
                }
                src={lightMode ? "/icons/heart.svg" : "/icons/heart_outline.svg"}
                alt="likes"
                height="24px"
                width='24px'
              />
          </div>
};

LikesIcon.defaultProps = {
};

export default LikesIcon;