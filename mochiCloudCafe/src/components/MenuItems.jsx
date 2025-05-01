import React from "react";
import { useLoaderData } from "react-router-dom";

const MenuItems = () => {
  const MenuItems = useLoaderData();

  return (
    <div >
      <div className="menuPage">
        <h1>{MenuItems.dessert}</h1>
      </div> 

      <div className="box-box">
        <div className="menubox-1">
        <img src={MenuItems.image}/>
        </div>

        <div className="menubox-2">
          <div>
          <p className="textBg">Every flavor tells a story - pick yours!</p>
          </div>
          <div className="flavor-item">
            <div className="menubtn">
            <h3>{MenuItems.flavor[0]}</h3>
            </div>
            <div className="menubtn">
            <h3>{MenuItems.flavor[1]}</h3>
            </div>
            <div className="menubtn">
            <h3>{MenuItems.flavor[2]}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MenuItems;

export const MenuItemsLoader = async ({ params }) => {
  const { id } = params;
  // displaying the fetched URL from data.json and adding the ID endpoint
  const res = await fetch("http://localhost:3000/menu/" + id);
  if (!res.ok) {
    throw Error("Could not find dessert details:(");
  }
  return res.json();
};
