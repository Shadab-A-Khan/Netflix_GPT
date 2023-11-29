import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[19%] px-[6%] text-white bg-gradient-to-r from-black  absolute">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className= " font-sans py-6 w-1/4">{overview}</p>
      <div className="">
        <button className="mr-1 px-5 py-2 text-xl bg-white text-black rounded-md font-semibold hover:scale-95 hover:bg-gray-200">
          ▶Play
        </button>
        <button className="ml-1 px-5 py-2 text-xl text-white bg-gray-500 rounded-md font-semibold hover:scale-95 hover:bg-gray-200 hover:text-gray-600">
          🛈 More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
