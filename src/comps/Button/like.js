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
  margin-right: 25px;
`;

class Likes extends React.Component {

  constructor(props){

    super(props);
    this.state ={
      likes: 0,
      updated: false
    }
    this.updateLikes = this.updateLikes.bind(this);
  }

  updateLikes() {

    if(!this.state.updated) {
      this.setState((prevState, props) => {
        
        return {
          likes: prevState.likes + 1,
          updated: true
        };
      });
    } else {

      this.setState((prevState, props) => {
        return {
          likes: prevState.likes - 1,
          updated: false
        };
      });
    }
  }

  render(){
    
    return(
      <Container>
        <IconCon onClick={this.updateLikes}>
          <LikesIcon />
        </IconCon>
          <p>{this.state.likes}</p>
      </Container>
    );
  }
}

export default Likes;
