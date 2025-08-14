import { useEffect, useState } from "react";
import { NavLink } from "react-router";
import { LOGO_URL } from "../utils/contants";
const Header = () => {
  const [btnName, setBtnName] = useState("login");
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
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
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
