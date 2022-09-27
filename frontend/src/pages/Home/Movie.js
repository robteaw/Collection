import React, { useState, useEffect } from "react";
import Axios from "axios";
import { FaPlus, FaEdit, FaTimes } from "react-icons/fa";
import Search from "./Search";

export default function Movie() {
  const [listOfMovies, setListOfMovies] = useState([]);
  const [name, setName] = useState("");
  const [genre, setGenre] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:3001/getMovies").then((response) => {
      setListOfMovies(response.data);
    });
  }, []);

  return (
    <>
      <div className="button_initial">
      <Search />
      </div>

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
