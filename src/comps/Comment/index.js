import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
height: auto;
padding: 20px 30px 15px 30px;
background-color: #FFFFFF;
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
background-color: #DAB;
border-radius: 50%;
    .prof_img{
        width: 100%;
        height: 100%;
        border-radius: 50%;
        object-fit:cover;
    }
`;

const UserName = styled.div`
font-size: 14pt;
font-weight: bold;
font-family: Inter;
color: #000000;
padding:0px 20px 10px 20px;
`;

const UserComment = styled.div`
font-size: 14pt;
font-weight: semi-bold;
font-family: Inter;
color: #808080;
padding: 0px 20px 10px 20px;
max-width: 500px;
min-width: 300px;
`;

const Divider = styled.div`

display: flex;
border-bottom: 1px solid #C1C1C1;
max-width: 570px;
min-width: 350px;
`;


const Comment = ({}) => {

    return <Container>
        <InnerCont>
            <div className="avatar_block">
                <AvatarIcon>
                    <img className="prof_img" src='img/profile.jpg' />
                </AvatarIcon>
            </div>
            <div>
                <UserName>Maya Higa</UserName>
                <UserComment>Wow, really an incredible story... It’s great to see some of the amazing work you are all doing at Alveus!</UserComment>
            </div>
        </InnerCont>
        <Divider />
    </Container>
}

Comment.defaultProps = {
}

export default Comment;    