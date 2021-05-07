import React, { Component } from 'react';

import Card from "../card/Card"

import './Home.css'

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <> 
        <div className="card">
          <Card
          icon = '/images/userAvatar.png'
          userName='The User'
          movieName= 'Pulp Fiction'
          imageUrl='/images/pulpFictionCover.jpg'
          description='Lorem ipsum används ofta som exempeltext inom trycksaksframställning och grafisk design för att visa hur till exempel ett dokument kommer att se ut när väl den riktiga texten är på plats.'
          />
        </div>
        <div className="card">
          <Card
          icon = '/images/userAvatar.png'
          userName='The User'
          movieName= 'Pulp Fiction'
          imageUrl='/images/pulpFictionCover.jpg'
          description='Lorem ipsum'
          />
        </div>
      </>
    )
  }
}
