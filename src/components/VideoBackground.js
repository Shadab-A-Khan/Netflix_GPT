import { useSelector } from "react-redux";
import useVideoBackground from "../hooks/useVideoBackground";

const VideoBackground = ({ movieId }) => {
  useVideoBackground(movieId);
  const TrailerVideo = useSelector((store) => store.movies?.TrailerVideo);
  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video -mt-16"
        src={
          "https://www.youtube.com/embed/" +
          TrailerVideo?.key +
          "?&autoplay=1&mute=1&loop=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>

    </div>
  );
};

export default VideoBackground;
