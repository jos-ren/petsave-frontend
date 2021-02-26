import React, { useState } from 'react';
import styled from 'styled-components';
import {ReactComponent as Add} from '../../icons/add.svg';
import hawk from '../../img/hawk.jpg';

// & img{
//     width:375px;
//     height:250px;
//     object-fit:cover;
// }

const Container = styled.div`
display: flex;
flex-direction: row;
min-width: 300px;
max-width: 600px;
height: auto;
`;

const Column1 = styled.div`
height: auto;
width: 90%;
display: flex;
padding: 10px 5px 5px 10px;
margin: 15px 0px 0px 15px;
flex-direction: column;
align-items: center;
`;

const Column2 = styled.div`
height: auto;
width: 90%;
display: flex;
padding: 10px 5px 5px 10px;
margin: 15px 15px 0px 0px;
flex-direction: column;
align-items: center;
`;

const ImgCont = styled.div`
width: 100%;
height:${props=>props.height ? props.height : "220px"};
border-radius: 16px;
background-color: #F1B900;
background-color: #000000;
margin-bottom: 10px;
    .img{
        width: 100%;
        height: 100%;
        border-radius: 16px;
        object-fit:cover;
    }
`;



const HomeFeed = ({onContainerSelect}) => {

    return <Container>
        <Column1>      
            <ImgCont>
                <img className="img" src={hawk} />
            </ImgCont>
            <ImgCont >
                <img className="img" src={hawk} />
            </ImgCont>
        </Column1>

        <Column2>      
            <ImgCont height="120px">
                <img className="img" src={hawk} />
            </ImgCont>
            <ImgCont>
                <img className="img" src={hawk} />
            </ImgCont>
            <ImgCont height="120px">
                <img className="img" src={hawk} />
            </ImgCont>
        </Column2>

    </Container>
}

HomeFeed.defaultProps = {
    height: null
}

export default HomeFeed;  