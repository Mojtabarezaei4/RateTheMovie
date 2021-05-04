import React, { Component } from 'react';
import Card from "./Card"

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div>
        <h1>Home</h1>

        <Card
        title='Card title'
        imageUrl='/images/pulpFictionCover.jpg'
        body='Lorem ipsum'
        />
        
      </div>
    );
  }
}
