import React, { useState, useEffect } from "react";
import Axios from "axios";
import Search from "./Search";

export default function Movie() {
  const [listOfMovies, setListOfMovies] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/getMovies").then((response) => {
      setListOfMovies(response.data);
    });
  }, []);

  return (
    <>
      <Search />
      <div className="card_container">
        {listOfMovies
          .sort((a, b) => (a.name > b.name ? 1 : -1)) // sort by name
          .map((movie) => {
            return (
              <div className="card">
                <h3>{movie.name}</h3>
                <p>{movie.genre}</p>
                <img src={movie.image} alt="" />
              </div>
            );
          })}
      </div>
    </>
  );
}
