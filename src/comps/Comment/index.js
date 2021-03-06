import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
height: auto;
padding: 0px 24px 0px 24px;
`;

const InnerCont = styled.div`
display: flex;
flex-direction: row;
`;

const AvatarIcon = styled.div`
max-height: 36px;
min-height: 36px;
max-width: 36px;
min-width: 36px;
padding:12px 0px 0px 0px;
border-radius: 50%;
    .prof_img{
        width: 100%;
        height: 100%;
        border-radius: 50%;
        object-fit:cover;
    }
`;

const UserName = styled.h5`
padding:12px 0px 6px 12px;
`;

const UserComment = styled.div`
padding:0px 0px 12px 12px;
font-family: Inter;
font-size: 14px;
color: #000000;
`;

const Line = styled.div`
    width: 414px;
    height: 0.1px;
    background-color: rgba(0, 0, 0, 0.1);
    display: ${props => props.displayline ? props.displayline : ""};
`;


const Comment = ({ username, comment, pfpic, displayline }) => {

    return <div>
        <Container>
            <InnerCont>
                <div className="avatar_block">
                    <AvatarIcon>
                        <img className="prof_img" src={pfpic} />
                    </AvatarIcon>
                </div>
                <div>
                    <UserName>@{username}</UserName>
                    <UserComment>{comment}</UserComment>
                </div>
            </InnerCont>
        </Container>
        <Line displayline={displayline} />
    </div>
}

Comment.defaultProps = {
    pfpic: 'img/profile.jpg',
    username: "mayahiga",
    comment: "Wow, really an incredible story... It’s great to see some of the amazing work you are all doing at Alveus!",
    displayline: "flex"
}

export default Comment;