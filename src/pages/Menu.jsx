import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'

const Menu = () => {

    // to get API data and use Loader function, we need to have useLoaderData hook.
    const menuData = useLoaderData();
  return (
    <div className='menu'>
        {menuData.map((menu)=>{
          return <Link>
                    <img src={menu.image}/>
                    <h2>{menu.dessert}</h2>
                    <h4>{menu.flavor}</h4>
                    <p>${menu.price} ea.</p>
                </Link>
        })}

   
    </div>
  )
}

export default Menu

// this function will be loading in data from API
//// i realized that the endpoint u put at the end of url matches the object u receive! ///
export const menuLoader = async () => {
  const res = await fetch("http://localhost:3000/menu");
  return res.json();
}

