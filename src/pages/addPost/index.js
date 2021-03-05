import React, { useState, useEffect } from "react";
import {useParams, useHistory} from 'react-router-dom';
import axios from "axios";

import AddPhoto from "comps/AddPhoto";
import MultiLineInput from "comps/MultiLineInput";
import TopNav from "comps/TopNav";
import Navbar from "comps/NavBar";
import Button from "comps/Button/default";

function AddPost() {
    return (
      <div className="page">
        <TopNav />
        <AddPhoto />
        <MultiLineInput header="Caption" />
        <Button margin="24px"/>
        <Navbar />
      </div>
    );
  }
  
  export default AddPost;