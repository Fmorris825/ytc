import VideoPlayer from "../VideoPlayer/VideoPlayer";

import { Container } from "react-bootstrap";
import CommentList from "../../CommentsSection/CommentList/CommentList";

import "bootstrap/dist/css/bootstrap.min.css";
import RelatedVideos from "../RelatedVideos/RelatedVideos";

const VideoPage = ({
  videoId,
  token,
  activeVideo,
  setVideoId,
  setActiveVideo,
}) => {
  return (
    <Container className="d-flex justify-content-between">
      <CommentList videoId={videoId} token={token} />
      <Container>
        <VideoPlayer videoId={videoId} activeVideo={activeVideo} />
        <RelatedVideos
          videoId={videoId}
          setVideoId={setVideoId}
          setActiveVideo={setActiveVideo}
        />
      </Container>
    </Container>
  );
};

export default VideoPage;
