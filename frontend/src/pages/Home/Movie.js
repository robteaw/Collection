import React, { useState, useEffect } from "react";
import Axios from "axios";

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

  const createMovie = () => {
    Axios.post("http://localhost:3001/createMovie", {
      name,
      genre,
      image,
    }).then((response) => {
      setListOfMovies([...listOfMovies, { name, genre, image }]);
    });
  };

  return (
    <>
      <div>
        {listOfMovies.map((movie) => {
          return (
            <div>
              <h2>Name: {movie.name}</h2>
              <h2>Genre: {movie.genre}</h2>
              <h2>Image: {movie.image}</h2>
            </div>
          );
        })}
      </div>
      <div className="add">
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
          placeholder="Image"
          onChange={(e) => {
            setImage(e.target.value);
          }}
        />
        <button onClick={createMovie}>Add Movie</button>
      </div>
    </>
  );
}
