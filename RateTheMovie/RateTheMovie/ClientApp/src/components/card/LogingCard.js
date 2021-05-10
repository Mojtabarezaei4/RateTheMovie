import React from 'react'

import './Card.css'

export default function LogingCard({icon}) {
    return (
        <div className="card-container loging-page">
            <div className="card-icon loging-icon">
                <img src={icon} alt=""/>
            </div>
            <form 
                className="loging-form"
                action=""
            >
                <label>E-mail</label>
                <input 
                    type="email" 
                    placeholder="E-mail"
                    autoComplete="off"
                    name="email"
                    required
                    />
                <label>Password</label>
                <input 
                    type="password"
                    placeholder="Password"
                    autoComplete="off"
                    name="password"
                    required
                />
                <button>Log In</button>
                <button>Register</button>
            </form>
        </div>
    )
}
