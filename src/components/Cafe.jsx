import React, { useState } from "react";
import "./style.css";
import menu from './menuAPI';
import Navbar from './Navbar';
import MenuCard from './MenuCard';


const uniqueList = [...new Set
  (menu.map((currEle) =>{
  return currEle.category
})
),
"All",
]
  
const Cafe = () => {

  const [menuData, setMenuData] = useState(menu);
  const [menuList, setMenuList] = useState(uniqueList);

  const filterItem = (category) => {
    if(category==="All"){
      setMenuData(menu);
      return;
    }

    const updatedList = menu.filter((currEle) =>{
      return currEle.category === category

    })
    setMenuData(updatedList)
  };
   
  return (
    <>
     <Navbar filterItem={filterItem} menuList={menuList} />
     <MenuCard  menuData={menuData} />
    </>
  );
};

export default Cafe;
