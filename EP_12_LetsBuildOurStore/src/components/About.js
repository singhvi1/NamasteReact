import User from "./user";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";
import { useContext } from "react";
const About=()=>{
    const data=useContext(UserContext)
    return(
        <div>
            <h2>About</h2>
            <h2>this i about page </h2>
            <User  name="vikash(function)" location="barhaiya"/>
            <UserClass name="vikash(class)" location="barh"/>
            <h3>Context_Name: {data.loggedInUser}</h3>

        </div>
    )
}

export default About;