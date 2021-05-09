import React from 'react'

import './Card.css'

export default function ProfileCard({userName, userEmail, icon}) {
    return (
        <div className="card-container profile-container">
            <div className="left-side" >
                <h2>Name</h2>
                <h4>{userName}</h4>
                <h2>Email</h2>
                <h4>{userEmail}</h4>
                <form className="profile-form">
                    <input type="password" name="password" placeholder="Enter new password"/>
                    <input type="password" name="repeat-password" placeholder="Repeat the new password"/>
                    <input type="text" name="gender" placeholder="Your favorit gender"/>
                </form>
            </div>
            <div className="right-side">
                <img className="card-icon" src={icon} />
                <button>Save</button>
            </div>
      </div>
    )
}
