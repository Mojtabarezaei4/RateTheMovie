import React, { Component } from 'react';

import FriendsCard from '../card/FriendsCard'
import Search from '../serachBar/Search';

export class Friends extends Component {
  static displayName = Friends.name;

  render () {
    return (
      <div className="card">
        <Search />
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
        userName="Bert"
        addIcon="/images/addFriend.png"
        />
        <FriendsCard
        icon="/images/userAvatar.png"
        userName="Dorna"
        addIcon="/images/addFriend.png"
        />
        <FriendsCard
        icon="/images/userAvatar.png"
        userName="Jeff"
        addIcon="/images/addFriend.png"
        />
        <FriendsCard
        icon="/images/userAvatar.png"
        userName="John"
        addIcon="/images/addFriend.png"
        />
        <FriendsCard
        icon="/images/userAvatar.png"
        userName="Ester"
        addIcon="/images/addFriend.png"
        />
        <FriendsCard
        icon="/images/userAvatar.png"
        userName="Bosse"
        addIcon="/images/addFriend.png"
        />
      </div>
    );
  }
}