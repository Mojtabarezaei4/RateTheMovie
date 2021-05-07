import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './navigation/NavMenu';

export class Layout extends Component {
  static displayName = Layout.name;

  render () {
    return (
      <div>
        <NavMenu />
        <Container id="container">
          {this.props.children}
        </Container>
      </div>
    );
  }
}
