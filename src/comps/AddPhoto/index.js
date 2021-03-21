import styled from 'styled-components';
const React = require('react')

const Container = styled.label`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
width:366px;
height:366px;
border-radius: 36px;
background-color: #54BAF3;
cursor: pointer;
margin: ${props => props.margin ? props.margin : "24px"};
`;

const Photo = styled.img`
width:366px;
height:366px;
border-radius: 36px;
object-fit:cover;
position:fixed;
`;

const Plus = styled.img`
width:65px;
height:65px;
`;

const AddPhoto = ({filename, onChange, image}) => {
    return (
        <Container>
            <input
                filename={filename}
                onChange={onChange }
                type="file"
                accept="image/*"
                // hidden 
                />
            <Plus src='/icons/add.svg' />
            <Photo src={image} />
        </Container>
    );
}
export default AddPhoto;