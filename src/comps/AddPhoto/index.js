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

class AddPhoto extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            file: null
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event) {
        this.setState({
            file: URL.createObjectURL(event.target.files[0])
        })
    }

    render() {
        return (
            <Container>
                <input type="file" onChange={this.handleChange} hidden/>
                <Plus src='/icons/add.svg' />
                <Photo src={this.state.file} />
            </Container>
        );
    }
}
export default AddPhoto;