import React from 'react'
import Contact from '../pages/Contact'
import { Outlet } from 'react-router-dom'


const ContactLayout = () => {
  return (
    <>
    <div>
      <img src='src/assets/contacthero.svg'/>
        <Contact/>
        <Outlet/>
    </div>
    </>
  )
}

export default ContactLayout