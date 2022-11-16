import React, { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";

const SearchPage = ({}) => {
  const [query, setQuery] = useState("");

  return (
    <div>
      <SearchBar query={query} setQuery={setQuery} />
      <SearchResults />
    </div>
  );
};

export default SearchPage;
