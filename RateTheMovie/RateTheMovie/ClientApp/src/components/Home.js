import React, { Component } from 'react';
import StarRating from "./StarRating";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser } from "@fortawesome/free-solid-svg-icons"

import Card from "./Card"
import Like from './Like';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div>
        <h1>Home <Like size={100}/> </h1>

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
