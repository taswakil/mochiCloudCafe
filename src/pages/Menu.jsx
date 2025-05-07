import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'

const Menu = () => {

    // to get API data and use Loader function, i need to have useLoaderData hook.
    const menuData = useLoaderData();
  return (
    <div className='menu'>
        {menuData.map((menu)=>{

          ///the 'link to' with key allows me to navigate to a different page, with a specific id. when i click on icecream, i go to a page with '/menu/1' endpoint /////
          return <Link to={menu.id.toString()} key={menu.id}>
                    <img style={{width: "70%"}} src={menu.image}/>
                    <h2 className='textBg'>{menu.dessert}</h2>
                 
                    <p className='textBg'>${menu.price} ea.</p>
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
    if(!res.ok){
      throw Error('Could not find dessert details:(')
    }
  return res.json();
}

