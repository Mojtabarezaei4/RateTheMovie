import React, { useRef, useState, useEffect } from 'react'
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/home/Home';
import { Friends } from './components/friends/Friends';
import { Movies } from './components/movies/Movies';
import { Profile } from './components/profile/Profile';
import { Loging } from './components/loging/Loging';
import { Register } from './components/register/Register';

import './custom.css'
import './index.css';

export default function App () {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [redirect, setRedirect] = useState(false)

  useEffect(() => {
    (
      async() => {
          const respons = await fetch( /* concetion to the backend */ 'http://localhost:5000/api/user', {
              method:"GET",
              headers: {'Content-Type': 'application/json'},
              /* Getting coockies */
              credentials: 'include'
          })
          const content = await respons.json()
          setName(content.name)
          setEmail(content.userEmail)
          setRedirect(true)
      }
    )();
  })
  
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/friends' component={Friends} />
        <Route path='/movies' component={Movies} />
        <Route path='/user' component={
          ()=><Profile userName={name} userEmail={email} setName={setName}/>
          }
          />
        <Route path='/login' component={
          ()=><Loging setName={setName}/>
          }
          />
        <Route path='/register' component={Register} />
      </Layout>
    );
  
}
