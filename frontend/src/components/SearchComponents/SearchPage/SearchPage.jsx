import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "../SearchBar/SearchBar";
import SearchResult from "../SearchResult/SearchResult";

const SearchPage = (props) => {
  const [query, setQuery] = useState("Modern Warfare");
  const [searchResults, setSearchResults] = useState({});
  const apiKey = "AIzaSyClqSVB9oYxpNNomwLzAqftNXXE9KA1sVE";

  useEffect(() => {
    getQuery();
  }, [query]);

  async function getQuery() {
    let response = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?q=${query}}&key=${apiKey}`
    );
    setSearchResults(response.data);
  }

  console.log(searchResults.items);
  if (searchResults)
    return (
      <div>
        <SearchBar query={query} setQuery={setQuery} />
        {searchResults.items.map((result, index) => {
          return <SearchResult result={result} key={index} />;
        })}
      </div>
    );
  else {
    return (
      <div>
        <SearchBar query={query} setQuery={setQuery} />
      </div>
    );
  }
};

export default SearchPage;
