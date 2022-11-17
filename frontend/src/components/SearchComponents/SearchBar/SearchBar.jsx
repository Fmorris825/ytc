import React, { useState } from "react";

const SearchBar = ({ setQuery }) => {
  const [tempQuery, setTempQuery] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setQuery(tempQuery);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        required
        placeholder="Tell me what you want, what you really really want"
        size="50"
        value={tempQuery}
        onSubmit={(event) => setTempQuery(event.target.value)}
      />
      <button>Okay go</button>
    </form>
  );
};

export default SearchBar;
