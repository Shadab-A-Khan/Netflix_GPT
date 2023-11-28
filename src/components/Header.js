import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispath = useDispatch();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        console.log(error + "in handleSignOut() in Header component");
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispath(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispath(removeUser());
        navigate("/");
      }
    });
    //unsubscribe when component unmounts
    return () => unsubcribe();
  }, []);

  return (
    <div className=" absolute w-screen px-8 py-2  bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-44"
        src={LOGO}
        alt="logo"
      ></img>
      {user && (
        <div className="flex p-2">
          <img
            className="w-12 h-12 mr-5 mt-2 rounded-lg"
            src={user?.photoURL}
            alt="usericon"
          />
          <button
            className="font-bold text-lg hover:underline text-white hover:scale-95 hover:text-red-700"
            onClick={handleSignOut}
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
