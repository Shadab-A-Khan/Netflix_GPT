import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { addUser } from "../utils/userSlice";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { BG_URL, USER_AVATAR } from "../utils/constants";
const Login = () => {
  const [isSignIn, setisSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispath = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleButtonClick = () => {
    //validate user entry
    const message = checkValidData(email.current.value, password.current.value);
    if (message) {
      setErrorMessage(message);
      return;
    }

    //firebase api
    // sign-up and sign-in -Authentication
    if (!isSignIn) {
      //sign-up
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;

          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispath(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              console.log(error + " login page");
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode + "-" + errorMessage);
          setErrorMessage("error in singing-up");
        });
    } else {
      //sign-in
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode + "-" + errorMessage);
          setErrorMessage("Invalid Login Credentials");
        });
    }
  };

  const toggleSignInForm = () => {
    setisSignIn(!isSignIn);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={BG_URL} alt="background-img" />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="  absolute mt-[5%] mx-auto right-0 left-0 w-[24%] h-[69%] px-[3rem] py-[2.5rem] bg-transparent-80 bg-black bg-opacity-80 rounded-md"
      >
        <div className="m-[6%] mb-[1%]">
          <h1 className="font-semibold text-white text-3xl mb-[4%]">
            {isSignIn ? "Sign in" : "Sign up"}
          </h1>
          {!isSignIn && (
            <input
              ref={name}
              type="text"
              placeholder="Enter your Name"
              className="p-[5%] py-[4%] mt-[5%] rounded-md w-full bg-gray-700 text-white"
            ></input>
          )}
          <input
            ref={email}
            type="text"
            placeholder="Email or phone"
            className="p-[5%] py-[4%] my-[2.7%] mt-[5%] w-full rounded-md bg-gray-700 text-white"
          ></input>
          <input
            ref={password}
            type="password"
            placeholder="Passoword"
            className="p-[5%] py-[4%] my-[2.7%] rounded-md w-full bg-gray-700 text-white"
          ></input>
          <p className="text-orange-500 text-xs pl-[2%]">{errorMessage}</p>
          <button
            className="py-[4%] mt-[11%] text-white font-semibold hover:scale-95 bg-red-600 rounded-md w-full"
            onClick={handleButtonClick}
          >
            {isSignIn ? "Sign in" : "Sign up"}
          </button>
        </div>
        <div className="mx-[7%]">
          {isSignIn && (
            <div className="flex">
              <div className="flex py-[3%] w-2/3">
                <div>
                  <input type="checkbox" className="cursor-pointer" />
                </div>

                <div className="text-gray-300 ml-[3%] text-sm rounded-md">
                  Remember me
                </div>
              </div>
              <div className="text-gray-300 text-sm w-1/3 p-[3%] brounded-md hover:underline cursor-pointer">
                Need help?
              </div>
            </div>
          )}
          {isSignIn && (
            <h1 className="text-gray-400 mt-[20%]">
              New to Netflix?{" "}
              <span
                className="text-white font-semibold hover:underline cursor-pointer"
                onClick={toggleSignInForm}
              >
                Sign Up Now
              </span>{" "}
            </h1>
          )}
          {!isSignIn && (
            <h1 className="text-gray-400 mt-[20%]">
              Already user ?{" "}
              <span
                className="text-white font-semibold hover:underline cursor-pointer"
                onClick={toggleSignInForm}
              >
                Sign In Now
              </span>{" "}
            </h1>
          )}
          <p className="mt-[5%] text-xs text-gray-400">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.{" "}
            <span className="text-blue-700 hover:underline">Learn more.</span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
