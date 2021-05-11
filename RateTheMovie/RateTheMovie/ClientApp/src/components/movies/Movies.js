import React, { Component } from 'react';

import MovieCard from '../card/MovieCard';
import Search from '../serachBar/Search';

import "./Movie.css"

export class Movies extends Component {
  static displayName = Movies.name;

  render () {
    return (
      < > 
        <div className="card">
          <Search />
          <MovieCard 
            movieName="Pulp Fiction"
            imageUrl="/images/pulpFictionCover.jpg"
          />
        </div>
      </>
    );
  }
}
