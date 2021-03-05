import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
min-width: 414px;
//max-width: 600px;
min-height: 896px;
//max-height: 1000px;
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