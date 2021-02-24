import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
width: 414px;
height: 896px;
background-color: #000000;
opacity: 65%;
`;

const Backdrop = ({onContainerSelect}) => {

    return <Container>
    </Container>
}

Backdrop.defaultProps = {
}

export default Backdrop;