import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const Container = styled.div`
display: flex;
flex-direction: row;
min-width: 100%;
max-width: 100%;
height: auto;
`;

const Column1 = styled.div`
height: auto;
width: 90%;
display: flex;
padding: 12px 6px 6px 12px;
margin: 12px 0px 0px 12px;
flex-direction: column;
align-items: center;
`;

const Column2 = styled.div`
height: auto;
width: 90%;
display: flex;
padding: 12px 6px 6px 6px;
margin: 12px 12px 0px 0px;
flex-direction: column;
align-items: center;
`;

const ImgCont = styled.div`
width: 100%;
height:${props => props.height ? props.height : "220px"};
border-radius: 16px;
margin-bottom: 10px;
cursor: pointer;
border: none;
    .img{
        width: 100%;
        height: 100%;
        border-radius: 16px;
        object-fit:cover;
    }
`;



const HomeFeed = ({ onFeedPhotoClick, }) => {

    const [feedClick, setFeedClick] = useState(false);
    const history = useHistory();

    return <Container>
        <Column1>

            <ImgCont onClick={() => {
                // this will eventually lead to post:id once we have a backend
                history.push("/post")
            }}>
                <img className="img" src='img/bunny.jpg' onClick={() => {
                    onFeedPhotoClick(feedClick)
                    console.log(feedClick);
                }} />
            </ImgCont>

            <ImgCont onChange={(e) => {
                setFeedClick(); //Opens the selected photo
            }}>
                <img className="img" src='img/duck.jpg' onClick={() => {
                    onFeedPhotoClick(feedClick)
                    console.log(feedClick);
                }} />
            </ImgCont>
        </Column1>

        <Column2>
            <ImgCont height="120px" onChange={(e) => {
                setFeedClick(); //Opens the selected photo
            }}>
                <img className="img" src='img/gecko.jpg' onClick={() => {
                    onFeedPhotoClick(feedClick)
                    console.log(feedClick);
                }} />
            </ImgCont>

            <ImgCont onChange={(e) => {
                setFeedClick(); //Opens the selected photo
            }}>
                <img className="img" src='img/fox.jpg' onClick={() => {
                    onFeedPhotoClick(feedClick)
                    console.log(feedClick);
                }} />
            </ImgCont>

            <ImgCont height="120px" onChange={(e) => {
                setFeedClick(); //Opens the selected photo
            }}>
                <img className="img" src='img/kittyrescue.jpg' onClick={() => {
                    onFeedPhotoClick(feedClick)
                    console.log(feedClick);
                }} />
            </ImgCont>
        </Column2>

    </Container>
}

HomeFeed.defaultProps = {
    height: null,
    onFeedPhotoClick: () => { }
}

export default HomeFeed;