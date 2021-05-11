import React, { Component } from 'react';
import ProfileCard from '../card/ProfileCard';

import "./Profile.css"

export class Profile extends Component {
  static displayName = Profile.name;

  render () {
    return (
      <div className="card">
        <ProfileCard 
          userName="Amanediel"
          userEmail="Amanediel@gmail.com"
          icon="/images/userAvatar.png"
        />
      </div>
    );
  }
}
