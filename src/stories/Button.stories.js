import React from 'react';
import Button from 'comps/Button/default';
import RoundButton from 'comps/Button/round';
import FollowButton from 'comps/Button/follow';

export default {
  title: 'petSave/Button', 
  component: Button
}; 

export const DefaultButton = () => <Button />;
export const RoundButtons = () => <RoundButton />;
export const FollowFollowing = () => <FollowButton />;