import React from "react";

function Search({ setQuery }) {
  return (
    <div className="searchbar">
      <h2> Search Tea Shop</h2>
      <h3>in New York, Chicago, Atlanta, Houston, San Francisco, Seattle, etc...</h3>
      <div>
      <input
        type="text"
        id="search"
        placeholder="Type a city to search..."
        onChange={(e) => setQuery(e.target.value)}
      />
      </div>
    </div>
  );
}

export default Search;
