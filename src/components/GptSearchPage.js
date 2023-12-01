import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BG_URL } from "../utils/constants";

const GptSearchPage = () => {
  return (
    <div>
      <div className="fixed">
        <img className="h-screen object-cover md:h-auto" src={BG_URL} alt="background-img" />
      </div>

      <div className="pt-[21%] md:pt-0">
        <GptSearchBar />
        <div className="mt-[17%] md:mt-0">
          <GptMovieSuggestions />
        </div>
      </div>
    </div>
  );
};

export default GptSearchPage;
