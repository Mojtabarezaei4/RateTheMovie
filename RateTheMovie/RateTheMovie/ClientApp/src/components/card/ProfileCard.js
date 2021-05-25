import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'

import './Card.css'

export default function ProfileCard(props, {icon}, setName) {
    
    const logout = async () =>{
        await fetch( /* concetion to the backend/endpoint */ 'http://localhost:5000/api/logout', {
            method:"POST",
            headers: {'Content-Type': 'application/json'},
            /* Getting coockies */
            credentials: 'include',
        })
        setName = ""
    }
    
    let menu

    if (props.userName !== ""){
        menu = (
            <>
                <div className="left-side" >
                    <h2>Name</h2>
                    <h4>
                        {props.userName ? props.userName : "Non loged in. Refresh to login"}
                    </h4>
                    <h2>Email</h2>
                    <h4>{props.userEmail ? props.userEmail : "Non loged in. Refresh to login"}</h4>
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
            </>
        )
    }
    else{
        menu= (
            <Redirect to="/login" />
        )
    }
    return (
        <div className="card-container profile-container">
            {menu}
        </div>
    )
}
