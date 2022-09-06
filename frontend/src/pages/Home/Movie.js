import React, { useState, useEffect } from "react";
import Axios from "axios";

export default function Movie() {
  const [listOfMovies, setListOfMovies] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/getMovies").then((response) => {
      setListOfMovies(response.data);
    });
  }, []); //

  return (
    <div>
      {listOfMovies.map((movie) => {
        return (
          <div>
            {" "}
            <h2>Name: {movie.name}</h2>
            <h2>Genre: {movie.genre}</h2>
            <h2>Image: {movie.image}</h2>
          </div>
        );
      })}
    </div>
  );
}
