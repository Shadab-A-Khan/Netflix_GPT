import React from "react";
import { IMG_CDN_URL } from "../utils/constants";
const MovieCard = ({ posterPath }) => {
  if(!posterPath) return;
  return (
    <div className="w-24 md:w-48 pr-4 cursor-pointer hover:scale-95 ">
      <img className="rounded-lg" alt="Movies Card" src={IMG_CDN_URL + posterPath}/>
    </div>
  );
};

export default MovieCard;
