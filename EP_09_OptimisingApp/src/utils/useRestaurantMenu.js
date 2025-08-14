import React, { useEffect, useState } from 'react'
import { MENU_API } from './contants';

const useRestaurantMenu = (resId) => {

  const [resInfo,setResInfo]=useState(null);
  useEffect(()=>{
    fetchData();
  },[]);
  const fetchData= async()=>{
    const data=await fetch(MENU_API);
    const json=await data.json();
    setResInfo(json.data);
  }
  return resInfo;
}

export default useRestaurantMenu
