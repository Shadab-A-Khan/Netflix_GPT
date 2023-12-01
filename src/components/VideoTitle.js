import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" w-screen aspect-video pt-[17%] px-[6%] text-white bg-gradient-to-r from-black  absolute">
      <h1 className="md:text-4xl text-2xl font-bold">{title}</h1>
      <p className= "hidden md:inline-block font-sans py-5 w-1/4">{overview}</p>
      <div className="my-1 md:my-0">
        <button className="mr-1 md:px-5 px-1 md:py-2 py-1 md:text-xl  bg-white text-black rounded-md font-semibold hover:scale-95 hover:bg-gray-200">
          ▶Play
        </button>
        <button className="hidden md:inline-block ml-1 px-5 py-2 text-xl text-white bg-gray-500 rounded-md font-semibold hover:scale-95 hover:bg-gray-200 hover:text-gray-600">
          🛈 More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
