import VideoPlayer from "../VideoPlayer/VideoPlayer";

import { Container } from "react-bootstrap";
import CommentList from "../../CommentsSection/CommentList/CommentList";

import "bootstrap/dist/css/bootstrap.min.css";

const VideoPage = ({ videoId, token, activeVideo }) => {
  return (
    <Container className="d-flex justify-content-between">
      <CommentList videoId={videoId} token={token} />
      <VideoPlayer videoId={videoId} activeVideo={activeVideo} />
    </Container>
  );
};

export default VideoPage;
