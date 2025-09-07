import { useRef, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { checkValidData } from "../utils/validate";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  const handleButtonClick = () => {
    let message = null;
    if (!isSignInForm) {
      message = checkValidData(
        email.current.value,
        password.current.value,
        name.current.value
      );
    } else {
      message = checkValidData(email.current.value, password.current.value);
    }
    setErrorMessage(message);
    console.log(email.current.value, password.current.value)
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="img flex-1">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/8d617e19-3c3c-4c28-8998-c9b14dbc7200/web/IN-en-20250901-TRIFECTA-perspective_48d84d4e-9558-46b8-a0f3-8b2dc8478431_medium.jpg"
          alt="logo"
        />
      </div>

      <form
        action=""
        onSubmit={(e) => e.preventDefault()}
        className="absolute p-12 bg-black/85 m-36 mx-auto right-0 left-0 w-4/12 text-white"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Name"
            className="p-4 my-4 w-full border rounded-lg"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder={
            isSignInForm ? "Email or Mobile Number" : "Email Address"
          }
          className="p-4 my-4 w-full border rounded-lg"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full border rounded-lg "
        ></input>
        {errorMessage && (
          <p className="text-red-500 font-bold py-2">{errorMessage}</p>
        )}
        <button
          className="p-4 my-6 w-full  bg-red-700 rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In " : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? " New to Netflix? Sign Up Now"
            : "Already a User? Sign In"}
        </p>
      </form>

      <Footer className="w-full" />
    </div>
  );
};

export default Login;
