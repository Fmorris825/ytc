import React from "react";
import { useNavigate } from "react-router-dom";

const SearchResult = ({ setVideoId, result, setActiveVideo }) => {
  const navigate = useNavigate();

  function handleSelection(event) {
    event.preventDefault();
    setVideoId(result.id.videoId);
    setActiveVideo(result.snippet);
    navigate(`/VideoPage/${result.id.videoId}`);
  }

  return (
    // <Link to="/VideoPlayer">
    <div>
      <img
        src={result.snippet.thumbnails.default.url}
        onClick={handleSelection}
      />
      <div onClick={handleSelection}>{result.snippet.title}</div>
    </div>
    // {/* </Link> */}
  );
};

export default SearchResult;
