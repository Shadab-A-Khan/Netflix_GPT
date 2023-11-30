import React from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const langkey = useSelector((store) => store.config.lang);

  return (
    <div className="w-1/3 absolute ml-[30%]">
      <form className="mt-[30%] bg-white p-2 rounded-xl">
        <input
          type="text"
          className=" py-4 pl-2 w-[72%]  rounded-lg font-semibold shadow-[8px_8px_8px_-10px_rgba(0,0,0,0.9)] mr-3"
          placeholder={lang[langkey].gptSearchPlaceholder}
        ></input>
        <button className="rounded-lg  py-4 w-1/4 bg-purple-700 font-semibold text-white hover:scale-95">
          {lang[langkey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
