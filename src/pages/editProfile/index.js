import React, { useState, useEffect } from "react";
import { useParams, useHistory } from 'react-router-dom';
import axios from "axios";

import AddPhoto from "comps/AddPhoto";
import TopNav from "comps/TopNav";
import Button from "comps/Button/default";
import Input from "comps/Input";
import Backdrop from "comps/Backdrop";
import ConfirmBox from "comps/Confirm";

function EditPost() {

  const history = useHistory();
  const [popup, setPopup] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const setBoth = () => {
    setPopup(true);
    setConfirm(true);
  };

  return (
    <div className="page">

      {popup ? <Backdrop /> : null}
      {confirm ? <ConfirmBox reMove2="false" text="Are you sure?" /> : null}

      <TopNav displayr="none" />
      <AddPhoto />
      <Input />
      <Input header="Email" placeholder="Enter your new email" />
      <Input header="Username" placeholder="Enter your new username" />
      <Input header="Password" placeholder="Enter your new password" />
      <Button margin="12px" text="Save" bgcolor="#54BAF3" disable="true"
        onClick={() => {
          history.push("/userprofile")
        }}
      />
      <Button margin="12px" text="Log Out" disable="true"
        onClick={() => setBoth()} />
    </div>
  );
}

export default EditPost;