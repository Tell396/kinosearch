import React, { useState } from 'react';

const Search = (props: string) => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchInputChanges = (e: any) => {
    setSearchValue(e.target.value);
  };

  const resetInputField = () => {
    setSearchValue('');
  };

  const callSearchFunction = (e: any) => {
    e.preventDefault();
    props.search(searchValue);
    resetInputField();
  };

  return (
    <form className="place-content-center grid">
      {/* <input value={searchValue} onChange={handleSearchInputChanges} type="text" />
      <input onClick={callSearchFunction} type="submit" value="SEARCH" /> */}

      <div className="inline-flex justify-center items-center space-x-2 rounded-md bg-gray-200 p-2 m-4">
        <input
          type="text"
          placeholder="Search the film..."
          className="text-lg text-gray-900 focus:outline-none outline-none bg-transparent border-none"
          value={searchValue} onChange={handleSearchInputChanges}
        />

        <button onClick={callSearchFunction} className="block rounded-md px-1 bg-gray-300">Search</button>
      </div>
    </form>
  );
};

export default Search;
