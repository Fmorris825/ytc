import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "../SearchBar/SearchBar";
import SearchResult from "../SearchResult/SearchResult";
import { Container } from "react-bootstrap";

const SearchPage = ({ setVideoId }) => {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState(false);
  // const apiKeyFred = "AIzaSyClqSVB9oYxpNNomwLzAqftNXXE9KA1sVE";
  const apiKeyTyler = "AIzaSyD0HSMf1NgDUe8TImck2hvUW8lGGrMY1BQ";

  useEffect(() => {
    getQuery();
  }, [query]);

  async function getQuery() {
    let response = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?q=${query}}&part=snippet&key=${apiKeyTyler}`
    );
    setSearchResults(response.data);
    console.log(searchResults);
  }
  console.log(searchResults);

  return searchResults ? (
    <div>
      <SearchBar query={query} setQuery={setQuery} />
      {searchResults.items.map((result, index) => {
        return (
          <SearchResult setVideoId={setVideoId} result={result} key={index} />
        );
      })}
    </div>
  ) : (
    <div>
      <SearchBar query={query} setQuery={setQuery} />
    </div>
  );
};

export default SearchPage;
