import React, { Component } from 'react';

import FriendsCard from '../card/FriendsCard'

export class Friends extends Component {
  static displayName = Friends.name;

  render () {
    return (
      <div className="card">
        <FriendsCard
        icon="/images/userAvatar.png"
        userName="Amanediel"
        addIcon="/images/addFriend.png"
        />
        <FriendsCard
        icon="/images/userAvatar.png"
        userName="Michell"
        addIcon="/images/addFriend.png"
        />
        <FriendsCard
        icon="/images/userAvatar.png"
        userName="Jack"
        addIcon="/images/addFriend.png"
        />
        <FriendsCard
        icon="/images/userAvatar.png"
        userName="Amanediel"
        addIcon="/images/addFriend.png"
        />
        <FriendsCard
        icon="/images/userAvatar.png"
        userName="Michell"
        addIcon="/images/addFriend.png"
        />
        <FriendsCard
        icon="/images/userAvatar.png"
        userName="Jack"
        addIcon="/images/addFriend.png"
        />
        <FriendsCard
        icon="/images/userAvatar.png"
        userName="Amanediel"
        addIcon="/images/addFriend.png"
        />
        <FriendsCard
        icon="/images/userAvatar.png"
        userName="Michell"
        addIcon="/images/addFriend.png"
        />
        <FriendsCard
        icon="/images/userAvatar.png"
        userName="Jack"
        addIcon="/images/addFriend.png"
        />
      </div>
    );
  }
}