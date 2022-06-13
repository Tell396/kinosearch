import React from "react";

const DEFAULT_PLACEHOLDER_IMAGE = "https://imgc.allpostersimages.com/img/posters/no-photography-sign-poster_u-L-F644FW0.jpg?artHeight=900&artPerspective=n&artWidth=900";


const Movie = ({ movie }: any) => {
  const poster =
    movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;
  return (
    <div className="m-2 bg-gray-200 p-3 rounded-xl">
      <div>
        <img
          width="200"
          alt={`The movie titled: ${movie.Title}`}
          src={poster}
        />
      </div>
      <p><h2>{movie.Title}</h2>({movie.Year})</p>
    </div>
  );
};


export default Movie;