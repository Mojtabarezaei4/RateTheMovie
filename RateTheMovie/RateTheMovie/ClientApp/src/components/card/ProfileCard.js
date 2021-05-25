import React, { useState } from 'react'
import { Link, Route } from 'react-router-dom'

import './Card.css'

export default function ProfileCard(props, {icon, setName}) {
    const logout = async () =>{
        await fetch( /* concetion to the backend/endpoint */ 'http://localhost:5000/api/logout', {
            method:"POST",
            headers: {'Content-Type': 'application/json'},
            /* Getting coockies */
            credentials: 'include',
        })
        setName = ""
    }

    return (
        <div className="card-container profile-container">
            <div className="left-side" >
                    <h2>Name</h2>
                    <h4>
                        {props.userName}
                    </h4>
                    <h2>Email</h2>
                    <h4>{props.userEmail}</h4>
                    <form className="profile-form">
                        <input type="password" name="password" placeholder="Enter new password"/>
                        <input type="password" name="repeat-password" placeholder="Repeat the new password"/>
                        <input type="text" name="gender" placeholder="Your favorit gender"/>
                    </form>
                </div>
                <div className="right-side">
                    <img className="card-icon profile" src={icon} />
                    <button>Save</button>
                    <Link to="/login" className="logout" onClick={logout}>Logout</Link>
                </div>
        </div>
    )
}
