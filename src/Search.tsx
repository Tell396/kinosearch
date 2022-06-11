import React, { useState } from 'react';

export default function Search(props: any) {
  const [search, setSearch] = useState([]);

  const handleSearchInputChanges = (e: any ) => {
    setSearch(e.target.value);
  };

  const resetInputField = () => {
    setSearch("")
  }

  const callSearchFunction = (e: any) => {
    e.preventDefault();
    props.search(search);
    resetInputField();
  }

  return (
    <form className="search">
        <input
          value={search}
          onChange={handleSearchInputChanges}
          type="text"
        />
        <input onClick={callSearchFunction} type="submit" value="SEARCH" />
      </form>
    );
}
