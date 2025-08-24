import { useRouteError } from "react-router";

const Error=()=>{
    const err=useRouteError()
    console.log(err)
    return(
        <div>
            <h2>Opps Something went wrong</h2>
            <h3>{err.status}: {err.statusText}</h3>
        </div>
    )
}

export default Error;