import React, { useEffect, useState } from 'react';
import Axios from 'axios';

import Search from './Search';

export default function App() {
  const [cinema, setCinema] = useState([]);

  useEffect(() => {
    // https://www.omdbapi.com/?s=${searchValue}&apikey=4a3b711b

    Axios.get(`https://www.omdbapi.com/?s=${search}&apikey=4a3b711b`).then((response) => {
      setCinema(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <div>
      <Search />

      <div>{JSON.stringify(cinema)}</div>

      {/* {cinema.map((items) => {
        return (
          <ul>
            <li key={items.Search}>123</li>
          </ul>
        );
      })} */}
    </div>
  );
}
