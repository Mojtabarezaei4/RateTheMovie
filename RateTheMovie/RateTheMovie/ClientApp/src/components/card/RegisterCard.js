import React, { useRef, useState } from 'react'
import { Link, Redirect, Route } from 'react-router-dom'

import './Card.css'

export default function RegisterCard({icon}) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [redirect, setRedirect] = useState(false)

    const submit = async (e) =>{
        e.preventDefault(); 

        const respons = await fetch( /* concetion to the backend/endpoint */ 'http://localhost:5000/api/register', {
            method:'POST',
            headers: {'Content-Type': 'application/json'},
            body:JSON.stringify({
                name: name,
                userEmail: email,
                password: password
            })
        })
        setRedirect(true)
        const content = await respons.json()

        console.log(content)
    }
    
    if(redirect){
        return <Redirect to="/login"/>
    }

    return (
        <div className="card-container register-page">
            <div className="card-icon register-icon">
                <img src={icon} alt=""/>
            </div>
            <form 
                className="register-form"
                onSubmit={submit}
            >
                <label>Name</label>
                <input 
                    type="text" 
                    placeholder="Name"
                    autoComplete="off"
                    name="name"
                    onChange={e => setName(e.target.value)}
                    required
                    />
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
                <button type="submit">Register</button>
                <Link className="link" to="/login">Already have an acount</Link>
            </form>
        </div>
    )
}
