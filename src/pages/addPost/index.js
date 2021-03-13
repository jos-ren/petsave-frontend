import React, { useState, useEffect } from "react";
import {useParams, useHistory} from 'react-router-dom';
import axios from "axios";

import AddPhoto from "comps/AddPhoto";
import MultiLineInput from "comps/MultiLineInput";
import TopNav from "comps/TopNav";
import Navbar from "comps/NavBar";
import Button from "comps/Button/default";
import Backdrop from "comps/Backdrop";
import ConfirmBox from "comps/Confirm";

function AddPost() {

    const [popup, setPopup] = useState(false);
    const [confirm, setConfirm] = useState(false);

    const [caption, setCaption] = useState("");
    // capture user_id by token

    const createPost = async () => {
      const resp = await axios.post("https://petsave-backend.herokuapp.com/api/posts", {
        caption: caption
      });
      console.log(resp);
      setPopup(true);
      setConfirm(true);
    }

    return (
      <div className="page">

        {popup ? <Backdrop /> : null }
        {confirm ? <ConfirmBox reMove1="false" /> : null }
        
        <TopNav text="Add Post" displayr="none" iconleft="/icons/back_outline.svg" />
        <AddPhoto />
        <MultiLineInput header="Caption" onChange={(e)=>setCaption(e.target.value)}/>
        <Button margin="12px" text= "Create Post" 
            onClick={() => createPost()} />
        <Navbar />
      </div>
    );
  }
  
  export default AddPost;