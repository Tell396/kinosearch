import React, { useEffect, useState } from 'react';

import Search from './components/Search';
import Card from './components/Card';

export default function App() {
  const [movies, setMovies] = useState([]);

  const MOVIE_API_URL = 'https://www.omdbapi.com/?s=matrix&apikey=4a3b711b';

  useEffect(() => {
    fetch(MOVIE_API_URL)
      .then((response) => response.json())
      .then((response) => {
        setMovies(response.Search);
      });
  }, []);

  const search = (searchValue) => {

    fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=4a3b711b`)
      .then((response) => response.json())
      .then((jsonResponse) => {
        setMovies(jsonResponse.Search);
      });
  };

  return (
    <div>
      <Search search={search} />
      <div className="flex flex-wrap justify-center items-center">
        {movies.map((movie, index) => (
          <Card key={`${index}`} movie={movie} />
        ))}
      </div>
    </div>
  );
}
