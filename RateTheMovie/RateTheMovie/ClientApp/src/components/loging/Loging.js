import React, { Component } from 'react';
import Login from '../card/LogingCard';

import "./Loging.css"

export class Loging extends Component {
    static displayName = Loging.name;

    render() {
        return (
            <div className="card">
                <Login
                  icon="/images/friendAdded.png"
                />
            </div>
        );
    }
}
