import VideoPlayer from "../VideoPlayer/VideoPlayer";

import { Container } from "react-bootstrap";
import CommentList from "../../CommentsSection/CommentList/CommentList";

import "bootstrap/dist/css/bootstrap.min.css";

const VideoPage = ({ videoId, token }) => {
  return (
    <Container className="d-flex justify-content-between">
      <CommentList videoId={videoId} token={token} />
      <VideoPlayer videoId={videoId} />
    </Container>
  );
};

export default VideoPage;
