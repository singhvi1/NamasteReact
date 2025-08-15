import { useEffect, useState } from "react";

const useOnelineStatus=()=>{
    const [onlineStatus,setOnlineStatus]=useState(true)
    //check if online
    useEffect(()=>{
        window.addEventListener("online",()=>{  
            setOnlineStatus(true);  
        })
        window.addEventListener("offline",()=>{  
            setOnlineStatus(false);  
        })
    },[])

    return onlineStatus; // return boolean value
}

export default useOnelineStatus;