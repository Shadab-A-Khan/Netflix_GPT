import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-36 m-12">
      <h1 className="text-5xl font-bold ">{title}</h1>
      <p className="text-lg my-6">{overview}</p>
      <div>
        <button className="mr-1 px-5 py-2 text-xl bg-blue-100 text-black rounded-md font-semibold">
          ▶Play
        </button>
        <button className="ml-1 px-5 py-2 text-xl text-white bg-slate-400 rounded-md font-semibold">
          🛈 More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
