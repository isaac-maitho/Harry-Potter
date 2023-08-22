"use client"
import React, { useState } from 'react';

export default function SearchCharacters ({getSearchResults}) {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`/potter/search?query=${query}`)

    console.log(response)
    const search = await response.json()
    getSearchResults(search)

  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className='rounded-full border-black'
        type="text"
        placeholder="Search by house or name..."
        value={query}
        onChange={handleInputChange}
      />
      <button type="submit" className='btn-primary btn-ghost rounded-full'>Search</button>
    </form>
  );
};

