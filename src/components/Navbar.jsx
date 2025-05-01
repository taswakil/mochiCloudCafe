import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {

    const navigate = useNavigate();

    return (
     <div className='navbar'>
        <NavLink to="/">
        <img src="mochiCloudLogo.svg" alt="logo" width={"200px"}/></NavLink>
        <ul>
            <NavLink to='/'><li>Home</li></NavLink> 
            <NavLink to='/menu'><li>Menu</li></NavLink> 
            <NavLink to='about'><li>About</li></NavLink>
            <NavLink to='contact'><li>Contact</li></NavLink>
        </ul>
        
        <button onClick={()=> navigate('/menu')}>Get Started</button>
     </div>
  )
}

export default Navbar