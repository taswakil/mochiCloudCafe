import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {

const navigate = useNavigate()
  return (
    <div>
        <h2>404 | Page Not Found</h2>
        <br/>
        <button onClick={() => navigate('/')}><p>Go To Home Page</p></button>
    </div>
  )
}

export default NotFound