import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { LogOut, User, Settings } from "lucide-react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";
const Header = () => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [showDropDown, setShowDropDown] = useState(false);
  const dropdownRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    // 1️⃣ Auth listener
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigate("/browse")
      } else {
        dispatch(removeUser());
        navigate("/")
      }
    });

    // 2️⃣ Click outside listener
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropDown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    // 3️⃣ Auto timeout to close dropdown after 5s
    let timeoutId;
    if (showDropDown) {
      timeoutId = setTimeout(() => {
        setShowDropDown(false);
      }, 3000); 
    }

    // Cleanup all
    return () => {
      unsubscribe();
      document.removeEventListener("mousedown", handleClickOutside);
      clearTimeout(timeoutId);
    };
  }, []); 

  // Sign Out
  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        console.log("User signed out!");
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
        console.error("Sign out error:", error);
      });
  };

  return (
    <div className="absolute w-full flex justify-between items-center px-8 py-2 bg-gradient-to-b from-black z-30">
      {/* Netflix Logo */}
      <img
        className="w-44 cursor-pointer"
        src={LOGO}
        alt="logo"
      />

      {user && (
        <div className="relative flex items-center gap-3" ref={dropdownRef}>
          {/* User Avatar */}
          <img
            src={user?.photoURL}
            alt="userLogo"
            className="w-10 h-10 rounded-lg cursor-pointer border-gray-300 hover:scale-105 transition"
            onClick={() => setShowDropDown(!showDropDown)}
          />

          {/* Dropdown */}
          {showDropDown && (
            <ul className="absolute right-0 top-12 w-40 bg-white rounded-md shadow-lg overflow-hidden transform transition-all duration-200 opacity-100 scale-100">
              <li>
                <button
                  className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition cursor-pointer"
                  onClick={() => navigate()}
                >
                  <User className="w-4 h-4" />
                  <span>Profile</span>
                </button>
              </li>
              <li>
                <button
                  className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition cursor-pointer"
                  onClick={() => navigate()}
                >
                  <Settings className="w-4 h-4 rotate-45" />
                  <span>Settings</span>
                </button>
              </li>
              <li>
                <button
                  className="flex items-center gap-2 w-full px-4 py-2 text-sm text-red-600 hover:bg-gray-100 transition cursor-pointer"
                  onClick={handleSignout}
                >
                  <LogOut className="w-4 h-4" />
                  <span>Sign Out</span>
                </button>
              </li>
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
