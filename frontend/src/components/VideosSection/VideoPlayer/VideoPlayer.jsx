import React from "react";
import { Link } from "react-router-dom";

const VideoPlayer = ({ video_Id }) => {
  return (
    <div>
      <h1>Video player!</h1>
      <iframe
        id="ytplayer"
        type="text/html"
        width="640"
        height="360"
        src={`https://www.youtube.com/embed/${video_Id}?autoplay=1&origin=http://example.com`}
        frameborder="0"
      ></iframe>
      <Link to="/">Search Again!</Link>
    </div>
  );
};

export default VideoPlayer;
