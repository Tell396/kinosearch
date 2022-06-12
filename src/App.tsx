import React, { useEffect, useState } from 'react';
import Axios from 'axios';

import Search from './components/Search';
import Card from './components/Card';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  const MOVIE_API_URL = 'https://www.omdbapi.com/?s=matrix&apikey=4a3b711b'

  /* useEffect(() => {
    // https://www.omdbapi.com/?s=${searchValue}&apikey=4a3b711b

    Axios.get(`https://www.omdbapi.com/?s=${search}&apikey=4a3b711b`).then((response) => {
      setCinema(response.data);
      console.log(response.data);
    });
  }, []); */

  useEffect(() => {
    fetch(MOVIE_API_URL)
      .then(response => response.json())
      .then(jsonResponse => {
        setMovies(jsonResponse.Search);
        setLoading(false);
      });
  }, []);

    const search = (searchValue: any) => {
    setLoading(true);
    setErrorMessage(null);

    fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=4a3b711b`)
      .then(response => response.json())
      .then(jsonResponse => {
        if (jsonResponse.Response === "True") {
          setMovies(jsonResponse.Search);
          setLoading(false);
        } else {
          setErrorMessage(jsonResponse.Error);
          setLoading(false);
        }
      });
  	};


  return (
    <div>
        <Search search={search} />
      {movies.map((movie, index) => (
        <Card key={`${index}`} movie={movie} />
      ))}
    </div>
  );
}
