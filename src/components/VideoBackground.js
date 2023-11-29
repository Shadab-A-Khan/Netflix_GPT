import { useSelector } from "react-redux";
import useVideoBackground from "../hooks/useVideoBackground";

const VideoBackground = ({ movieId }) => {
  useVideoBackground(movieId);
  const TrailerVideo = useSelector((store) => store.movies?.TrailerVideo);
  return (
    <div>
      <iframe
        src={"https://www.youtube.com/embed/" + TrailerVideo?.key}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
