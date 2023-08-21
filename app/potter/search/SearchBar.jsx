import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [text, setText] = useState('');

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(text);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search by house or name..."
        value={text}
        onChange={handleInputChange}
      />
      <button type="submit" className='btn-primary btn-ghost'>Search</button>
    </form>
  );
};

export default SearchBar;
