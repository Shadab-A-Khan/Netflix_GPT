import React from "react";
import { IMG_CDN_URL } from "../utils/constants";
const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-36 md:w-48 pr-4 hover:scale-95 ">
      <img className="rounded-lg" alt="Movies Card" src={IMG_CDN_URL + posterPath}/>
    </div>
  );
};

export default MovieCard;
