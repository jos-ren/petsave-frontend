import React from 'react';
import styled from 'styled-components';
import LikeButton from "../Button/like";
import { useHistory } from 'react-router-dom';

const PostBox = styled.div`
margin:0px 26px;
`;

const ProfileBox = styled.div`
height:64px;
display:flex;
align-items:center;
h3{
    cursor: pointer;
}
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
    width:100%;
    min-height:244px;
    max-height:458px;
    object-fit: cover;
    cursor:pointer;
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
    cursor: pointer;
`;

const Line = styled.div`
    width: 414px;
    height: 0.1px;
    background-color: rgba(0, 0, 0, 0.1);
    margin:12px 0 0 0;
    display: ${props => props.displayline ? props.displayline : ""};
`;

const SinglePost = ({ commentimg, avatarimg, postimg, caption, username, displayline }) => {

    const history = useHistory();

    return <div>
        <PostBox>
            <ProfileBox
                onClick={() => {
                    history.push("/profile")
                }}
            >
                <Avatar>
                    <img src={avatarimg} />
                </Avatar>
                <h3>@{username}</h3>
            </ProfileBox>
            <ImgBox
                onClick={() => {
                    history.push("/post")
                }}>
                <img src={postimg} />
            </ImgBox>
            <InteractBox>
                <Comment src={commentimg} onClick={() => {
                    history.push("/post")
                }} />
                <LikeButton />
            </InteractBox>
            <h6 onClick={() => {
                history.push("/post")
            }}
            >{caption}</h6>
        </PostBox>
        <Line displayline={displayline} />
    </div>
}

SinglePost.defaultProps = {
    commentimg: "/icons/comment_outline.svg",
    avatarimg: "/img/kitty.jpg",
    postimg: "/img/cat.jpg",
    caption: "this is an example caption which will go under each post to show what a caption will eventually look like",
    username: "alveus_sanctuary",
    displayline: "flex"
};

export default SinglePost;