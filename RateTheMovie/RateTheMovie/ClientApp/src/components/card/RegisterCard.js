import React from 'react'

import './Card.css'

export default function RegisterCard({icon}) {
    return (
        <div className="card-container register-page">
            <div className="card-icon register-icon">
                <img src={icon} alt=""/>
            </div>
            <form 
                className="register-form"
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
                <label>Repeat Password</label>
                <input 
                    type="password"
                    placeholder="Repeat Password"
                    autoComplete="off"
                    name="password"
                    required
                />
                <button>Register</button>
                <button>Already have an acount</button>
            </form>
        </div>
    )
}
