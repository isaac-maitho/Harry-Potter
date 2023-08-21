"use client"
import React, { useState } from 'react';
import SearchBar from './SearchBar';


function Search() {

    const [searchResults, setSearchResults] = useState([]);
    const [characters, setCharacters] = useState(initialCharacters);

    const handleSearch = (query) => {
        const filteredResults = characters.filter((character) => {
          return (
            character.house.toLowerCase().includes(query.toLowerCase()) ||
            character.name.toLowerCase().includes(query.toLowerCase())
          );
        });
        setSearchResults(filteredResults);
      };

  return (
    <div>
      <h1>Character Search</h1>
      <SearchBar onSearch={handleSearch} />
      <div>
        {searchResults.map((character) => (
          <div key={character.id}>
            {/* Display character information here */}
          </div>
        ))}
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  // Fetch initial character data from an API
  const response = await fetch('API_ENDPOINT_HERE');
  const initialCharacters = await response.json();

  return {
    props: {
      initialCharacters,
    },
  };
}


export default Search