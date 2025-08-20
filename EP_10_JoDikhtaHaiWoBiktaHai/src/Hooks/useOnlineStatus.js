import { useEffect, useState } from "react";

const useOnlineStatus=()=>{
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

export default useOnlineStatus;