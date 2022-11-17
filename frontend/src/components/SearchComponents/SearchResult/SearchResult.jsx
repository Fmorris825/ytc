import React from "react";
import { Link, useNavigate } from "react-router-dom";

const SearchResult = ({ setVideoId, result }) => {
  const navigate = useNavigate();

  function handleSelection(event) {
    event.preventDefault();
    setVideoId(result.id.videoId);
    navigate("/VideoPlayer");
    console.log(`I clicked on ${result.snippet.title}`);
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
