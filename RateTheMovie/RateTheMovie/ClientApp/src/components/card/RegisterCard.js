import React, { useRef, useState } from 'react'
import { Redirect, Route } from 'react-router-dom'

import './Card.css'

export default function RegisterCard({icon}) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')
    const [redirect, setRedirect] = useState(false)

    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()

    const submit = async (e) =>{
        e.preventDefault(); 

        const respons = await fetch( /* concetion to the backend */ 'http://localhost:3000/api/register', {
            method:"POST",
            headers: {'Content-Type': 'application/json'},
            body:JSON.stringify({
                email,
                password,
                passwordConfirm
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
                action=""
                onSubmit={submit}
            >
                <label>E-mail</label>
                <input 
                    type="email" 
                    ref={emailRef}
                    placeholder="E-mail"
                    autoComplete="off"
                    name="email"
                    onChange={e => setEmail(e.target.value)}
                    required
                    />
                <label>Password</label>
                <input 
                    type="password"
                    ref={passwordRef}
                    placeholder="Password"
                    autoComplete="off"
                    name="password"
                    onChange={e => setPassword(e.target.value)}
                    required
                />
                <label>Repeat Password</label>
                <input 
                    type="password"
                    ref={passwordConfirmRef}
                    placeholder="Repeat Password"
                    autoComplete="off"
                    onChange={e => setPasswordConfirm(e.target.value)}
                    name="passwordConfirm"
                    required
                />
                <button type="submit">Register</button>
                <button>Already have an acount</button>
            </form>
        </div>
    )
}
