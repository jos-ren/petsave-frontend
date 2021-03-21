import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const Gap = styled.div`
    height: 88px;
`;

const Container = styled.div`
    height: 88px;
    width: 100%;
    background-color:white;
    filter: drop-shadow(0px 1px 30px rgba(0, 0, 0, 0.05));
    position:absolute;
    top:0px;
    right:0px;
    z-index:2;
`;

const Spacer = styled.div`
    height: 24px;
`;

const NavBox = styled.div`
    height:64px;
    display:flex;
    justify-content:center;
    align-items:center;
`;

const IconBoxLeft = styled.div`
    display: ${props => props.displayl ? props.displayl : ""};
    justify-content: center;
    align-items: center;
    height:64px;
    width:72px;
    position:absolute;
    top:24px;
    cursor:pointer;
`;

const IconBoxRight = styled.div`
    display: ${props => props.displayr ? props.displayr : ""};
    justify-content: center;
    align-items: center;
    height:64px;
    width:72px;
    position:absolute;
    top:24px;
    right:0px;
    cursor:pointer;
`;

const Icon = styled.img`
    width: 24px;
    height: 24px;
`;

const Line = styled.div`
    width: auto;
    height: 1px;
    background-color: rgba(0, 0, 0, 0.1);
`;

const Logo = styled.img`
    position:absolute;
    display: ${props => props.displaylogo ? props.displaylogo : ""};
`;

const TopNav = ({ iconleft, iconright, text, logo, displayr, displayl, displaylogo, onClick }) => {

    const history = useHistory();

    return <div>
        <Gap />
        <Container>
            <Spacer />
            <NavBox>
                <h2>{text}</h2>
                <Logo src={logo} displaylogo={displaylogo} />
            </NavBox>
            <IconBoxLeft displayl={displayl}
                onClick={() => {
                    history.goBack();
                }}
            >
                <Icon src={iconleft}></Icon>
            </IconBoxLeft>
            <IconBoxRight displayr={displayr}
                onClick={onClick}
            >
                <Icon src={iconright}></Icon>
            </IconBoxRight>
            <Line />
        </Container>
    </div>
}

TopNav.defaultProps = {
    iconleft: "/icons/back_outline.svg",
    iconright: "/icons/logout_outline.svg",
    text: "Profile",
    logo: "/logo.svg",
    displayr: "flex",
    displayl: "flex",
    displaylogo: "none",
    onClick:()=>{}
};

export default TopNav;