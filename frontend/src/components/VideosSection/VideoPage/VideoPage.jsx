import VideoPlayer from "../VideoPlayer/VideoPlayer";

import { Container } from "react-bootstrap";
import CommentList from "../../CommentsSection/CommentList/CommentList";

import "bootstrap/dist/css/bootstrap.min.css";
import RelatedVideos from "../RelatedVideos/RelatedVideos";
import "./VideoPage.css";

const VideoPage = ({
  videoId,
  token,
  activeVideo,
  setVideoId,
  setActiveVideo,
}) => {
  return (
    <div className="d-flex justify-content-between">
      <Container className="comment-column d-flex justify-content-center">
        <CommentList videoId={videoId} token={token} />
      </Container>
      <Container className="video-column">
        <VideoPlayer videoId={videoId} activeVideo={activeVideo} />
        <RelatedVideos
          videoId={videoId}
          setVideoId={setVideoId}
          setActiveVideo={setActiveVideo}
        />
      </Container>
    </div>
  );
};

export default VideoPage;
