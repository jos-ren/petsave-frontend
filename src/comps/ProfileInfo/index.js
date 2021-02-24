import { findRenderedComponentWithType } from "react-dom/test-utils";
import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Button from "comps/Button/default";
import RoundButton from "comps/Button/round";

const Container = styled.div`
    min-width: 414px;
    width: 100%;
    min-height: 233px;
    background-color: #f2f2f2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Top = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Image = styled.img``;

const Box = styled.div`
    & > div {
        display: flex;
        align-items: center;
    }
`;

const Name = styled.h2`
    text-transform: capitalize;
`;

const Bottom = styled.div``;

const ProfileInfo = ({onClick, name, numpost, numfollow, numfollower}) => {
    return (
        <Container>
            <Top>
                <Image />
                <Box>
                    <Name>{name}</Name>
                    <div>
                        <RoundButton />
                    </div>
                </Box>
            </Top>
        </Container>
    )
}

ProfileInfo.defaultProps = {
    name:"alveus sanctuary",
    onClick:()=>{}
};

export default ProfileInfo;