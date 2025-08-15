import { useEffect, useState } from "react";
import { NavLink } from "react-router";
import { LOGO_URL } from "../utils/contants";
import useOnelineStatus from "../utils/useOnlineStatus";
const Header = () => {
  const [btnName, setBtnName] = useState("login");
  const OnelineStatus=useOnelineStatus();
  console.log("header called");

  //useEffect   will be called on every render => no array xx
  //useEffect   will be called once  => empty array [];
  //useEffect   will be called when [btnName] changes  => [btnName];
  /*useEffect(()=>{
    console.log("useEffect Called")
  },[btnName])*/
  return (
    <div className="header">
      <div className="logoContainer">
        <NavLink to="/"><img className="logo" src={LOGO_URL} /></NavLink>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            Online Status:{(OnelineStatus==true) ?"✅" : "❌" }
          </li>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About Us</NavLink>
          </li>
          <li>Cart</li>
          <li>
            <NavLink to="/contact">Contacts</NavLink>
          </li>
          <li>
            <NavLink to="/Grocery">Grocery</NavLink>
          </li>
          <button
            className="login"
            onClick={() => {
              setBtnName(btnName === "login" ? "logout" : "login");
              console.log(btnName);
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
