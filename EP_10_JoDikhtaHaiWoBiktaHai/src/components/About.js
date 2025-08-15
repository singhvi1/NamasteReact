import User from "./user";
import UserClass from "./UserClass";
const About=()=>{
    return(
        <div>
            <h2>About</h2>
            <h2>this i about page </h2>
            <User  name="vikash(function)" location="barhaiya"/>
            <UserClass name="vikash(class)" location="barh"/>
        </div>
    )
}

export default About;