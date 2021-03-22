import React, { useState, useEffect } from "react";
import { useParams, useHistory } from 'react-router-dom';
import axios from "axios";
import styled from 'styled-components';

import AddPhoto from "comps/AddPhoto";
import MultiLineInput from "comps/MultiLineInput";
import TopNav from "comps/TopNav";
import Navbar from "comps/NavBar";
import Button from "comps/Button/default";
import Backdrop from "comps/Backdrop";
import ConfirmBox from "comps/Confirm";

function AddPost() {

  const [popup, setPopup] = useState(false);
  const history = useHistory();
  const [confirm, setConfirm] = useState(false);
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState("");
  const [imgurl, setImgurl] = useState(null);
  const [posts, setPosts] = useState([])

  const CreatePost = async event => {
    event.preventDefault()
    var token = await localStorage.getItem("token")
    if (token) {
      axios.defaults.headers.common['Authorization'] = token;
    } else {
      history.push("/login");
    }
    const data = new FormData()
    data.append('image', image)
    data.append('caption', caption)
    const resp = await axios.post('https://petsave-backend.herokuapp.com/api/posts', data
    );
    setPopup(true);
    setConfirm(true);
    setPosts([resp.data])
    console.log("resp", resp.data)
  }

  return (
    <div className="page">

      {popup ? <Backdrop /> : null}
      {confirm ? <ConfirmBox reMove1="false" /> : null}

      <TopNav text="Add Post" displayr="none" iconleft="/icons/back_outline.svg" />

      <form onSubmit={CreatePost}>
        <AddPhoto
          filename={image}
          onChange={
            e => {
              setImage(e.target.files[0])
              setImgurl(URL.createObjectURL(e.target.files[0]))
            }
          }
          image={imgurl}
        />
        <MultiLineInput margin="0px 24px" header="Caption" onChange={(e) => setCaption(e.target.value)} />
        <Button disable={caption === "" || image === ""} margin="0px 24px" text="Create Post" type="submit" />
      </form>
      <Navbar  iconl="/icons/home_outline.svg" iconr="/icons/profile_outline.svg"/>
    </div>
  );
}

export default AddPost;