import React, { useEffect, useState } from 'react';
import Axios from 'axios';

export default function App() {
  const [cinema, setCinema] = useState([]);

  useEffect(() => {
    // https://www.omdbapi.com/?s=${searchValue}&apikey=4a3b711b
    Axios.get(`https://www.omdbapi.com/?s=1917&apikey=4a3b711b`).then((response) => {
      setCinema(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <div className="App">
      {/* <div>{JSON.stringify(cinema)}</div> */}

      {cinema.map((items) => {
        return (
          <ul>
            <li key={items.Search}>123</li>
          </ul>
        );
      })}
    </div>
  );
}
