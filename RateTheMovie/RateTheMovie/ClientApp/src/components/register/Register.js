import React, { Component } from 'react';
import RegisterCard from '../card/RegisterCard';

export class Register extends Component {
    static displayName = Register.name;

    render() {
        return (
            <div className="card">
                <RegisterCard
                  icon="/images/addFriend.png"
                />
            </div>
        );
    }
}
