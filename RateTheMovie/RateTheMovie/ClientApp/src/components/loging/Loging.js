import React, { Component } from 'react';
import Login from '../card/LogingCard';

import "./Profile.css"

export class Profile extends Component {
    static displayName = Profile.name;

    render() {
        return (
            <div className="card">
                <Login
                />
            </div>
        );
    }
}
