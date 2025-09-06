import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

const Login = () => {
  const[isSignInForm, setIsSignInForm]=useState(true)

  const toggleSignInForm=()=>{
    setIsSignInForm(!isSignInForm);
  }
  return (
    <div>
      <Header />
      <div className="img absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/8d617e19-3c3c-4c28-8998-c9b14dbc7200/web/IN-en-20250901-TRIFECTA-perspective_48d84d4e-9558-46b8-a0f3-8b2dc8478431_medium.jpg"
          alt="logo"
        />
      </div>

      <form
        action=""
        className="absolute p-12 bg-black/85 m-36 mx-auto right-0 left-0 w-4/12 text-white"
      >
        <h1 className="font-bold text-3xl py-4">{isSignInForm ? "Sign In" :"Sign Up"}</h1>
        {!isSignInForm && <input
          type="text"
          placeholder="Name"
          className="p-4 my-4 w-full border rounded-lg"
        />}
        <input
          type="text"
          placeholder={isSignInForm ? "Email or Mobile Number":"Email Address"}
          className="p-4 my-4 w-full border rounded-lg"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full border rounded-lg "
        ></input>
        <button className="p-4 my-6 w-full  bg-red-700 rounded-lg">{isSignInForm ? "Sign In " : "Sign Up"}</button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>{isSignInForm ? " New to Netflix? Sign Up Now" : "Already a User? Sign In"}</p>
      </form>

      <Footer  className="absolute bottom-0 w-full"/>
    </div>
  );
};

export default Login;
