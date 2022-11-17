import React from "react";

const SearchResult = ({ result }) => {
  return (
    <ul>
      <li>{result.id.videoId}</li>
    </ul>
  );
};

export default SearchResult;
