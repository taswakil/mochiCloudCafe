import React from 'react'
import { Outlet } from 'react-router-dom'


const MenuLayout = () => {
  return (
    <div>
        <h2> Menu Items</h2>
        <p> List of current menu items at our cafe!^-^</p>
      
        <Outlet/>
    </div>
  )
}

export default MenuLayout