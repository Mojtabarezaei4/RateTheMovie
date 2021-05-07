import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/home/Home';
import { Friends } from './components/friends/Friends';
import { Movies } from './components/movies/Movies';
import { Profile } from './components/profile/Profile';

import './custom.css'
import './index.css';

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/friends' component={Friends} />
        <Route path='/movies' component={Movies} />
        <Route path='/profile' component={Profile} />
      </Layout>
    );
  }
}
