import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
width: 100vw;
height: 100vh;
background-color: #000000;
opacity: 65%;
position: absolute;
z-index: 10;
top:0px;
`;

const Backdrop = () => {

    return <Container>
    </Container>
}

Backdrop.defaultProps = {
}

export default Backdrop;