import React from 'react';
import Button from 'comps/Button/default';
import RoundButton from 'comps/Button/round';
import FollowButton from 'comps/Button/follow';
import LikeButton from 'comps/Button/like';

export default {
  title: 'petSave/Button', 
  component: Button
}; 

export const DefaultButton = () => <Button />;
export const RoundButtons = () => <RoundButton />;
export const FollowFollowing = () => <FollowButton />;
export const Like = () => <LikeButton />;
