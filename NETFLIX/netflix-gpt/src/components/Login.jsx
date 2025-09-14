import { useRef, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { checkValidData } from "../utils/validate";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { addUser } from "../utils/userSlice";
import { USER_AVATAR } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const dispatch = useDispatch();

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  const handleButtonClick = (e) => {
    e.preventDefault();
    let message = null;
    const emailValue = email.current.value.trim();
    const passwordValue = password.current.value.trim();
    const nameValue = !isSignInForm ? name.current.value.trim() : null;
    console.log(nameValue, emailValue, passwordValue);
    setLoading(true);

    if (!isSignInForm) {
      message = checkValidData(emailValue, passwordValue, name.current.value);
    } else {
      message = checkValidData(emailValue, passwordValue);
    }
    setErrorMessage(message);
    if (message) return message;
    // console.log(emailValue, passwordValue);

    if (!isSignInForm) {
      //signUp
      createUserWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: nameValue,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error);
            });
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        })
        .finally(() => setLoading(false));
    } else {
      //signIn
      signInWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        })
        .finally(() => setLoading(false));
    }
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
        type="submit"
        className="absolute  p-12 bg-black/85 m-36 mx-auto right-0 left-0 w-4/12 text-white"
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
          type="email"
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
          autoComplete="current-password"
        ></input>
        {errorMessage && (
          <p className="text-red-500 font-bold py-2">{errorMessage}</p>
        )}
        <button
          className="p-4 my-6 w-full  bg-red-700 rounded-lg"
          onClick={handleButtonClick}
          disabled={loading}
        >
          {loading ? "Processing.." : isSignInForm ? "Sign In " : "Sign Up"}
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
