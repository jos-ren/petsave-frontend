import React from 'react';
import styled from 'styled-components';
import LikeButton from "../Button/like"

const Container = styled.div`
margin:0px 26px;
`;

const ProfileBox = styled.div`
height:64px;
display:flex;
align-items:center;
`;

const Avatar = styled.div`
object-fit: contain;
margin-right:12px;
img{
    width:36px;
    height:36px;
    border-radius:18px;
}
`;

const ImgBox = styled.div`
object-fit: contain;
img{
    border-radius:24px;
    width:366px;
    min-height:244px;
    max-height:458px;
}
`;

const InteractBox = styled.div`
    display:flex;
    align-items:center;
    height:48px;
> * {
    margin-right:9px;
}
`;

const Comment = styled.img`
    width: 24px;
    height: 24px;
`;

const Line = styled.div`
    width: auto;
    height: 0.1px;
    background-color: rgba(0, 0, 0, 0.1);
    margin:12px 0 0 0;
`;

const SinglePost = ({ likenumber, commentimg, avatarimg, postimg, caption, username }) => {
    return <Container>
        <ProfileBox>
            <Avatar>
                <img src={avatarimg} />
            </Avatar>
            <h3>{username}</h3>
        </ProfileBox>
        <ImgBox>
            <img src={postimg} />
        </ImgBox>
        <InteractBox>
            <LikeButton />
            <Comment src={commentimg} />
            <h4>{likenumber} likes</h4>
        </InteractBox>
        <h6>{caption}</h6>
        <Line></Line>
    </Container>
}

SinglePost.defaultProps = {
    likenumber: 2379,
    commentimg: "/icons/comment_outline.svg",
    avatarimg: "/img/kitty.jpg",
    postimg: "/img/duck.jpg",
    caption: "this is an example caption which will go under each post to show what a caption will eventually look like",
    username: "Alveus Sanctuary",
};

export default SinglePost;