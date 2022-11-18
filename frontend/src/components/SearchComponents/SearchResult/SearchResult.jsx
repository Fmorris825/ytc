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
    <div className="d-flex justify-content-start p-3">
      <img
        className="shadow-lg p-3 mb-5 bg-white rounded"
        src={result.snippet.thumbnails.medium.url}
        onClick={handleSelection}
      />
      <div className="d-flex align-items-center flex-direction: row">
        <h6
          className="d-flex justify-content-start m-2"
          onClick={handleSelection}
        >
          {result.snippet.title}
        </h6>
        <div className="d-flex justify-content-start m-2">
          {result.snippet.channelTitle}{" "}
        </div>
      </div>
    </div>
    // {/* </Link> */}
  );
};

export default SearchResult;
