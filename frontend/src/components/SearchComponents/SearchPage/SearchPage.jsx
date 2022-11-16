import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "../SearchBar/SearchBar";
import SearchResult from "../SearchResult/SearchResult";

const SearchPage = ({}) => {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState({});
  const apiKey = "AIzaSyBZV2_Rx1yNNGH6ppTToQ7ijzhKwZWNShw";

  useEffect(() => {
    getQuery();
  }, [query]);

  async function getQuery() {
    let response = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?q=${query}}&key=${apiKey}`
    );
    setSearchResults(response.data);
    console.log(searchResults);
  }

  return (
    <div>
      <SearchBar query={query} setQuery={setQuery} />
      {searchResults.map((video, index) => {
        return <SearchResult video={video} />;
      })}
    </div>
  );
};

export default SearchPage;
