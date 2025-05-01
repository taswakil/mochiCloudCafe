import React from 'react'
import { Outlet } from 'react-router-dom'


const MenuLayout = () => {
  return (
  
    <div>
       <img src='menuhero.svg'/>
     <Outlet/>
      </div> 
  )
}

export default MenuLayout