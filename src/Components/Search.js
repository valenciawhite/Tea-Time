import React from "react";

function Search({ setQuery }) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Tea Shops:</label>
      <input
        type="text"
        id="search"
        placeholder="Type your city to search..."
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}

export default Search;
