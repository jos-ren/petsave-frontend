import React from 'react';
import styled from 'styled-components';
import FollowButton from "comps/Button/follow";
import RoundButton from "comps/Button/round";

const Container = styled.div`
    min-width: 414px;
    max-width: 414px;
    min-height: 220px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Top = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 85%;
`

const Image = styled.img`
    border-radius: 50%;
    width: 100px;
    height: 100px;
    object-fit: cover;
`;

const ButtonBox = styled.div`
    display: ${props => props.displayfollow ? props.displayfollow : ""};
`;

const Box = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

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
    margin: 0px 0px 10px 15px;
    text-align: left;
    font-size: ${props => props.username ? props.username : ""};
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

const ProfileInfo = ({onEmail, onFollow, name, imgurl, numpost, numfollow, numfollower, displayfollow, displaymsg, username}) => {
    return (
        <Container>
            <Top>
                <Image src={imgurl}/>
                <Box>
                    <Name username={username}>{name}</Name>
                    <ButtonBox>
                        <FollowButton displayfollow={displayfollow} onClick={onFollow} />
                        <RoundButton displaymsg={displaymsg} onClick={onEmail}/>
                    </ButtonBox>
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
    onEmail:()=>{},
    onFollow:()=>{},
    displayfollow: "flex",
    displaymsg: "flex",
    username: "24px"
};

export default ProfileInfo;