import React from "react";

const SearchResult = ({ searchResults }) => {
  return searchResults.items.map((result) => {
    return (
      <ul>
        <li>{result.id.videoId}</li>
      </ul>
    );
  });
};

export default SearchResult;
