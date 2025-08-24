import { useState, useContext } from "react";
import { NavLink } from "react-router";
import { LOGO_URL } from "../utils/contants";
import useOnlineStatus from "../Hooks/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [btnName, setBtnName] = useState("login");
  const OnelineStatus = useOnlineStatus();
  const data = useContext(UserContext);
  console.log(data);
  console.log("header called");

  //useEffect   will be called on every render => no array xx
  //useEffect   will be called once  => empty array [];
  //useEffect   will be called when [btnName] changes  => [btnName];
  /*useEffect(()=>{
    console.log("useEffect Called")
  },[btnName])*/
  return (
    <div className="header  flex justify-between items-center  bg-[#ff5200]  mb-2 px-3 py-2  w-full  z-50">
      <div className="logoContainer flex items-center">
        <NavLink to="/">
          <img
            className="logo w-[160px] h-auto"
            src={LOGO_URL}
            alt="Website Logo"
          />
        </NavLink>
      </div>

      {/* navButtons */}
      <div className="nav-items">
        <ul className="flex item-center space-x-6  text-white font-medium  ">
          <li className="hover:underline">
            Online Status:{OnelineStatus == true ? "✅" : "🚫"}
          </li>
          <li className="hover:underline">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="hover:underline">
            <NavLink to="/about">About Us</NavLink>
          </li>
          <li className="hover:underline cursor-pointer">Cart</li>
          <li className="hover:underline">
            <NavLink to="/contact">Contacts</NavLink>
          </li>
          <li className="hover:underline">
            <NavLink to="/Grocery">Grocery</NavLink>
          </li>
          <li>
            <button
              className="login hover:cursor-pointer  hover:underline "
              onClick={() => {
                setBtnName(btnName === "login" ? "logout" : "login");
                console.log(btnName);
              }}
            >
              {btnName}
            </button>
          </li>
          <li >{data.loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
