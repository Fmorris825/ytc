import React from "react";

const VideoPlayer = ({}) => {
  return (
    <div>
      <h1>Video player!</h1>
      <iframe
        id="ytplayer"
        type="text/html"
        width="640"
        height="360"
        src="https://www.youtube.com/embed/0-RZtb7mc_4?autoplay=1&origin=http://example.com"
        frameborder="0"
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
