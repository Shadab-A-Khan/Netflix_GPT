import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";
const Header = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        console.log(error + "in handleSignOut() in Header component");
        navigate("/error");
      });
  };

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    //unsubscribe when component unmounts
    return () => unsubcribe();
  }, []);

  return (
    <div className="absolute w-screen md:px-8 md:py-16 bg-gradient-to-b ml-4 md:ml-0 from-black z-10 flex flex-col md:flex-row justify-between">
      {!showGptSearch && <img className="md:w-44  w-[30%] ml-28 md:ml-0" src={LOGO} alt="logo"></img>}
      {showGptSearch && (
        <h1 className=" w-[15%] text-4xl bg-purple-800  px-4 rounded-lg pt-2 -mt-10 text-white">
          GPT Search
        </h1>
      )}
      {user && (
        <div className="flex md:p-2 pl-[6%]">
          {showGptSearch && (
            <select
              className="h-12 md:mr-5 px-4 -mt-12  rounded-lg font-bold mr-[30%] bg-gray-900 text-white"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          {!showGptSearch && (
            <button
              className="h-12 mr-5 px-4 mt-2 rounded-lg font-semibold text-white bg-purple-800 hover:scale-95"
              onClick={handleGptSearchClick}
            >
              GPT Search
            </button>
          )}
          {showGptSearch && (
            <button
              className="h-12 mr-5 px-4 -mt-12 rounded-lg font-bold text-white bg-red-600 hover:scale-95"
              onClick={handleGptSearchClick}
            >
              Netflix
            </button>
          )}
          {!showGptSearch && (
            <img
              className="w-12 h-12 mr-5 mt-2 rounded-lg"
              src={user?.photoURL}
              alt="usericon"
            />
          )}
          {!showGptSearch && (
            <button
              className="h-12 mr-5 px-4 mt-[0.4rem]  font-bold text-lg text-white hover:scale-95 md:bg-black bg-blue-500 rounded-lg opacity-90"
              onClick={handleSignOut}
            >
              Sign out
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
