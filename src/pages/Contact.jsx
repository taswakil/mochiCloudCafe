import React from 'react'
import { useNavigate } from 'react-router-dom';


const Contact = () => {

  const navigate = useNavigate();

  return (
    <div>
        <div className='buttons'>
          <button onClick={() => navigate('info')}><p>Contact Info</p></button>
          <button onClick={() => navigate('form')}><p>Contact Form</p></button>
        </div>
    </div>
  )
}

export default Contact 