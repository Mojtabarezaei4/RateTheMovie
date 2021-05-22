import React, { useRef, useState } from 'react'
import { Link, Redirect, Route } from 'react-router-dom'

import './Card.css'

export default function LogingCard({icon}, setName) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [redirect, setRedirect] = useState(false)

    const submit = async (e) =>{
        e.preventDefault()
        const respons = await fetch( /* concetion to the backend/endpoint */ 'http://localhost:5000/api/login', {
            method:"POST",
            headers: {'Content-Type': 'application/json'},
            /* Getting coockies */
            credentials: 'include',
            body:JSON.stringify({
                userEmail:email,
                password:password
            })
        })

        const content = await respons.json()

        setRedirect(true)

        setName = content.name
    }

    if(redirect){
        return <Redirect to="/user"/>
    }

    return (
        <div className="card-container loging-page">
            <div className="card-icon loging-icon">
                <img src={icon} alt=""/>
            </div>
            <form 
                className="loging-form"
                action=""
                onSubmit={submit}
            >
                <label>E-mail</label>
                <input 
                    type="email" 
                    placeholder="E-mail"
                    autoComplete="off"
                    name="email"
                    onChange={e => setEmail(e.target.value)}
                    required
                    />
                <label>Password</label>
                <input 
                    type="password"
                    placeholder="Password"
                    autoComplete="off"
                    name="password"
                    onChange={e => setPassword(e.target.value)}
                    required
                />
                <button>Log In</button>
                <Link className="link" to="/register">Rgister</Link>
            </form>
        </div>
    )
}
