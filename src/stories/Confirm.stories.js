import React from 'react';
import ConfirmBox from "comps/Confirm";

export default {
  title: 'petSave/Confirm', 
  component: ConfirmBox
}; 

export const PostConfirm = () => <ConfirmBox reMove1="false" />;
export const LogoutConfirm = () => <ConfirmBox reMove2="false" text="Are you sure?" />;
