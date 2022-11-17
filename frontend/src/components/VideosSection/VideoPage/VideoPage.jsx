import React, { useState } from "react";
import VideoPlayer from "./VideoPlayer";

const VideoPage = ({ videoId }) => {
  const [videoId, setVideoId] = useState("");

  return <VideoPlayer videoId={videoId} />;
};

export default VideoPage;
