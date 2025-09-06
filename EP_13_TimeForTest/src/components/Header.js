import { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { LOGO_URL } from "../utils/contants";
import useOnlineStatus from "../Hooks/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("login");
  const OnelineStatus = useOnlineStatus();
  const data = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);

  // console.log(data);
  // console.log("header called");

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
          <li className="hover:underline cursor-pointer font-bold">
            <NavLink to={"/cart"}>({cartItems.length})Cart</NavLink>
          </li>
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
                // console.log(btnName);
              }}
            >
              {btnName}
            </button>
          </li>
          <li>{data.loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
