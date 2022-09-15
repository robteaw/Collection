import React, { useState, useEffect } from "react";
import Axios from "axios";
import { FaPlus } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

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

  // Add movie to database
  const createMovie = () => {
    Axios.post("http://localhost:3001/createMovie", {
      name,
      genre,
      image,
    }).then((response) => {
      setListOfMovies([...listOfMovies, { name, genre, image }]);
    });
  };

  // Delete movie from database
  const deleteMovie = (name) => {
    Axios.delete("http://localhost:3001/deleteMovie", {
      name,
      genre,
      image,
    }).then((response) => {
      setListOfMovies([...listOfMovies, { name, genre, image }]);
    });
  };

  return (
    <>
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
      <div className="add_data">
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Genre"
          onChange={(e) => {
            setGenre(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Image Url"
          onChange={(e) => {
            setImage(e.target.value);
          }}
        />
        <div className="button_container">
          <button className="add" onClick={createMovie}>
            <FaPlus />
          </button>
          <button className="edit">
            <FaEdit />
          </button>
          <button className="delete" onClick={deleteMovie}>
            <FaTimes />
          </button>
        </div>
      </div>
    </>
  );
}
