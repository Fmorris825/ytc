import React from "react";
import { Link } from "react-router-dom";

const SearchResult = ({ result }) => {
  return (
    <div on click>
      {/* {result.id.videoId} */}
      <Link to="/VideoPlayer">Click to Watch!</Link>
    </div>
  );
};

export default SearchResult;
