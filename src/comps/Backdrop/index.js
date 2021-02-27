import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
min-width: 350px;
max-width: 600px;
min-height: 600px;
max-height: 1000px;
background-color: #000000;
opacity: 65%;
`;

const Backdrop = () => {

    return <Container>
    </Container>
}

Backdrop.defaultProps = {
}

export default Backdrop;