import React from "react";

const SearchBar = ({ query, setQuery }) => {
  function handleSubmit(event) {
    event.preventDefault();
    setQuery(event);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        required
        placeholder="Tell me what you want, what you really really want"
        size="50"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      <button>Okay go</button>
    </form>
  );
};

export default SearchBar;
