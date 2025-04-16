import React from "react";
import { useLoaderData } from "react-router-dom";

const MenuItems = () => {
  const MenuItems = useLoaderData();

  return (
    <div>
      <br />
      <h2>Dessert Category:</h2>
      <h1>{MenuItems.dessert}</h1>
      <p>Indulge in delicious fluffy desserts that range in sweetness ^-^</p>
      <img src={MenuItems.image} />
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
