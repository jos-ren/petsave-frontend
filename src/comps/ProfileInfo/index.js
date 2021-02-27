import { findRenderedComponentWithType } from "react-dom/test-utils";
import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import FollowButton from "comps/Button/follow";
import RoundButton from "comps/Button/round";

const Container = styled.div`
    min-width: 414px;
    min-height: 233px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Top = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 85%;
`

// const Image = styled.div`
//     border-radius: 50%;
//     width: 100px;
//     height: 100px;
//     // background-image: url(${props=>props.imgurl ? props.imgurl : "/icon/default_profile.svg"});
//     background-image: url("/icons/default_profile.svg"};
//     background-repeat: no-repeat;
//     background-position: center;
//     background-size: cover; 
// `;

const Image = styled.img`
    border-radius: 50%;
    width: 100px;
    height: 100px;
`;

const Box = styled.div`
    display: flex;
    flex-direction: column;

    & > div {
        display: flex;
        align-items: center;

        &> :first-child {
            margin-right: 10px;
        }
    }
`;

const Name = styled.h2`
    text-transform: capitalize;
    margin-bottom: 10px;
`;

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    margin-top: 20px;

    & > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        flex: 1;
    }
`;

const Num = styled.h2``;

const Text = styled.h6`
    color: rgba(0, 0, 0, 0.5);
`;

const ProfileInfo = ({onClick, name, imgurl, numpost, numfollow, numfollower}) => {
    return (
        <Container>
            <Top>
                <Image src={imgurl}/>
                <Box>
                    <Name>{name}</Name>
                    <div>
                        <FollowButton />
                        <RoundButton onClick={onClick}/>
                    </div>
                </Box>
            </Top>
            <Bottom>
                <div>
                    <Num>{numpost}</Num>
                    <Text>Posts</Text>
                </div>
                <div>
                    <Num>{numfollower}</Num>
                    <Text>Followers</Text>
                </div>
                <div>
                    <Num>{numfollow}</Num>
                    <Text>Following</Text>
                </div>
            </Bottom>
        </Container>
    )
}

ProfileInfo.defaultProps = {
    name:"alveus sanctuary",
    imgurl:"/icons/default_profile.svg",
    numpost:24,
    numfollower:6732,
    numfollow:365,
    onClick:()=>{}
};

export default ProfileInfo;