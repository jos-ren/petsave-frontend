import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
height: auto;
padding: 0px 24px 0px 24px;
background-color:#F0EEFF;
// border:1px solid red;
`;

const InnerCont = styled.div`
display: flex;
flex-direction: row;
`;

const AvatarIcon = styled.div`
height: 36px;
width: 36px;
cursor: pointer;
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
cursor: pointer;
`;

const UserComment = styled.div`
padding:0px 0px 12px 12px;
font-family: Inter;
font-size: 14px;
color: #000000;
`;

const Line = styled.div`
    min-width: 414px;
    height: 1px;
    background-color: rgba(0, 0, 0, 0.1);
    // display: ${props => props.displayline ? props.displayline : ""};
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