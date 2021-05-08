import React, { Component } from 'react';

import FriendsCard from '../card/FriendsCard'

export class Friends extends Component {
  static displayName = Friends.name;

  render () {
    return (
      <div>

        <FriendsCard
        icon="/images/userAvatar.png"
        userName="Amanediel"
        addIcon="/images/addFriend.png"
        />

        
        
      </div>
    );
  }
}