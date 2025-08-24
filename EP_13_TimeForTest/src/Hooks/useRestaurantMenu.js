import React, { useEffect, useState } from 'react'
import { MENU_API } from '../utils/contants';

const useRestaurantMenu = (resId) => {

  const [resInfo,setResInfo]=useState(null);
  useEffect(()=>{
    fetchData();
  },[]);
  const fetchData= async()=>{
    try{const data=await fetch(MENU_API +resId);
    const json=await data.json();
    setResInfo(json.data);}
    catch(err){
      console.log("something went wrong",err)
    }
  }
  return resInfo;
}

export default useRestaurantMenu
