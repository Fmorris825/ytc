import React, { useState } from "react";
import { Button } from "react-bootstrap";

const SearchBar = ({ setQuery }) => {
  const [tempQuery, setTempQuery] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setQuery(tempQuery);
    setTempQuery("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        required
        placeholder="Tell me what you want, what you really really want"
        size="50"
        value={tempQuery}
        onChange={(event) => setTempQuery(event.target.value)}
      />
      <Button className="button" variant="success">
        Okay go
      </Button>
    </form>
  );
};

export default SearchBar;
