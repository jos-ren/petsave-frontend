import React, { useState, useEffect } from "react";
import styled from "styled-components";
import LikesIcon from 'comps/Test';

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const IconCon = styled.div`
  max-width: 25px;
  max-height: 25px;
  margin-right: 6px;
  cursor: pointer;
`;

class Likes extends React.Component {

  constructor(props){

    super(props);
    this.state ={
      likes: props.likes,
      updated: false,
      onClick: () => { }
    }
    // this.updateLikes = this.updateLikes.bind(this);
  }

  


  render(){
    
    return(
      <Container>
        <IconCon onClick={this.props.updateLikes}>
          <LikesIcon />
        </IconCon>
          <h4>{this.props.likes} likes</h4>
      </Container>
    );
  }
}

export default Likes;
