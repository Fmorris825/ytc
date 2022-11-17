import React from "react";
import { Link } from "react-router-dom";

import { Container } from "react-bootstrap";

const VideoPlayer = ({ videoId }) => {
  return (
    <div>
      <Container>
        <h1>Video player!</h1>
        <iframe
          id="ytplayer"
          type="text/html"
          width="640"
          height="360"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&origin=http://example.com`}
          frameborder="0"
        ></iframe>
        <Container>
          <Link to="/">Search Again!</Link>
        </Container>
      </Container>
    </div>
  );
};

export default VideoPlayer;
