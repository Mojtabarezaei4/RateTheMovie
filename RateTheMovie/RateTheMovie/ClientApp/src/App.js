import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/home/Home';
import { Friends } from './components/friends/Friends';
import { Movies } from './components/movies/Movies';
import { Profile } from './components/profile/Profile';
import { Loging } from './components/loging/Loging';
import { Register } from './components/register/Register';

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
        <Route path='/api/user' component={Profile} />
        <Route path='/api/login' component={Loging} />
        <Route path='/api/register' component={Register} />
      </Layout>
    );
  }
}
