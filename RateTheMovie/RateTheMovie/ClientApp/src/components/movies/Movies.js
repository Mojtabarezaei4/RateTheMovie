import React, { Component } from 'react';

import MovieCard from '../card/MovieCard';

import "./Movie.css"

export class Movies extends Component {
  static displayName = Movies.name;

  render () {
    return (
      <div className="card">
        <MovieCard 
          movieName="Pulp Fiction"
          imageUrl="/images/pulpFictionCover.jpg"
        />
      </div>
    );
  }
}
