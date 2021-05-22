import React from 'react';
import ProfileCard from '../card/ProfileCard';

import "./Profile.css"

export function Profile (props) {

    return (
    <div className="card">
      <ProfileCard 
        userName = {props.userName}
        userEmail = {props.userEmail}
        icon="/images/userAvatar.png"
      />
    </div>
  );
  
}
