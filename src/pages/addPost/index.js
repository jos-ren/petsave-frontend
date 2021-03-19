import React, { useState, useEffect } from "react";
import { useParams, useHistory } from 'react-router-dom';
import axios from "axios";

import AddPhoto from "comps/AddPhoto";
import MultiLineInput from "comps/MultiLineInput";
import TopNav from "comps/TopNav";
import Navbar from "comps/NavBar";
import Button from "comps/Button/default";
import Backdrop from "comps/Backdrop";
import ConfirmBox from "comps/Confirm";

function AddPost() {

  // const [popup, setPopup] = useState(false);
  // const [confirm, setConfirm] = useState(false);
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState("");
  const [posts, setPosts] = useState([])
  // capture user_id by token

  // const createPost = async () => {
  //   const resp = await axios.post("https://petsave-backend.herokuapp.com/api/posts", {
  //     caption: caption
  //   });
  //   console.log(resp);
  //   // setPopup(true);
  //   // setConfirm(true);
  // }

  const CreatePost = async event => {
    event.preventDefault()
    const data = new FormData()
    data.append('image', image)
    data.append('caption', caption)
    const resp = await axios.post('https://petsave-backend.herokuapp.com/api/posts', data
      // {
      //   caption: caption,
      //   img_src: image
      // }
    );
    setPosts([resp.data])
    console.log("resp", posts)
  }


  return (
    <div className="page">

      {/* {popup ? <Backdrop /> : null}
      {confirm ? <ConfirmBox reMove1="false" /> : null} */}

      <TopNav text="Add Post" displayr="none" iconleft="/icons/back_outline.svg" />
      <form onSubmit={CreatePost}>
      {/* <AddPhoto /> */}
      <input
        filename={image}
        onChange={e => setImage(e.target.files[0])}
        type="file"
        accept="image/*"
      ></input>
      <MultiLineInput header="Caption" onChange={(e) => setCaption(e.target.value)} />
      <Button margin="12px" text="Create Post"
        type="submit"
        // onClick={() => CreatePost()}
      />
      </form>
      <Navbar />
    </div>
  );
}

export default AddPost;