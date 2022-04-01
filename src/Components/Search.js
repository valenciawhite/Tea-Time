import React from "react";



function Search({ setQuery }) {
 
  return (
    <div className="searchbar">
      <h2> A Great Cup of Tea is Just a Search Away</h2>
      <div>
      <input
        className="fas"
        type="text"
        id="search"
        placeholder=" Type a city to search..."
        onChange={(e) => setQuery(e.target.value)}
      />
      </div>
    </div>
  );
}

export default Search;
