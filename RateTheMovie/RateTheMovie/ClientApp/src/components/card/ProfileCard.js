import React, { useRef, useState, useEffect } from 'react'

import './Card.css'

export default function ProfileCard({userName, userEmail, icon}) {
    const [email, setEmail] = useState('')

    useEffect(() => {
        (
            async() => {
                const respons = await fetch( /* concetion to the backend */ 'http://localhost:3000/api/profile', {
                    method:"POST",
                    headers: {'Content-Type': 'application/json'},
                    /* Getting coockies */
                    credentials: 'include'
                })
                const content = await respons.json()
                setEmail(content.email)
            }
        )();
    })

    return (
        <div className="card-container profile-container">
            <div className="left-side" >
                <h2>Name</h2>
                <h4>{userName}</h4>
                <h2>Email</h2>
                <h4>{userEmail = email}</h4>
                <form className="profile-form">
                    <input type="password" name="password" placeholder="Enter new password"/>
                    <input type="password" name="repeat-password" placeholder="Repeat the new password"/>
                    <input type="text" name="gender" placeholder="Your favorit gender"/>
                </form>
            </div>
            <div className="right-side">
                <img className="card-icon profile" src={icon} />
                <button>Save</button>
            </div>
      </div>
    )
}
