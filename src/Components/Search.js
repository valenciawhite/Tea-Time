import React from "react";

function Search({ setQuery }) {
  return (
    <div className="searchbar">
      <h1> Search Tea Shop</h1>
      <h3>in New York, Chicago, Atlanta, Houston, San Francisco, Seattle</h3>
      <input
        type="text"
        id="search"
        placeholder="Type a city to search..."
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}

export default Search;
