import React, { useState } from 'react'
import "./style.css";
import Menu from './MenuApi';
import MenuCard from './MenuCard';
import Navbar from './Navbar';
const uniqueList = [...new Set(Menu.map((curElem) => {
    return curElem.category;
})),"All"
];

console.log(uniqueList);

const Restaurants = () => {

   const [menuData,setMenuData]= useState(Menu);
   const [menuList,setMenulist]= useState(uniqueList);

   const filterItem = (category) => {

    if(category === "All"){
      setMenuData(Menu);
      return;
    }
     const updatedlist = Menu.filter((curElem) => {
        return curElem.category === category;
     });
     setMenuData(updatedlist);
   };
  return (
  <>
  <Navbar filterItem={filterItem} menuList={menuList}/> 
  <MenuCard menuData={menuData}/>
  </>
  )
}
export default Restaurants;

 