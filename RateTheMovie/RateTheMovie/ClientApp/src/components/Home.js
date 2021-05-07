import React, { Component } from 'react';
import StarRating from "./StarRating";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser } from "@fortawesome/free-solid-svg-icons"

import Card from "./Card"

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div>
        <h1>Home</h1>

        <Card
        icon = '/images/userAvatar.png'
        userName='The User'
        movieName= 'Pulp Fiction'
        imageUrl='/images/pulpFictionCover.jpg'
        body='Lorem ipsum'
        />
        
        
      </div>
    )
  }
}
