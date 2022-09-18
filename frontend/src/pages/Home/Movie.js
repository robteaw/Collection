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

  // Add movie
  const createMovie = () => {
    Axios.post("http://localhost:3001/createMovie", {
      name,
      genre,
      image,
    }).then((response) => {
      setListOfMovies([...listOfMovies, { name, genre, image }]);
    });
  };

  // Edit movie
  // Axios.put('/update', async (req, res) => {
  //   const newMovie = req.body.newMovie;
  //   const id = req.body.id;

  //   Movie.update({_id:id})

  //   try {
  //     await
  //   } catch(err) {
  //     console.log(err)
  //   }
  // } )

  // Delete movie
  const deleteMovie = async (id) => {
    try {
      const res = await Axios.delete(
        "http://localhost:3001/deleteMovie/id",
        id
      );
      if (res.data.success) {
        alert(res.data.msg);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
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
        </div>
      </div>

      <div className="card_container">
        {listOfMovies
          .sort((a, b) => (a.name > b.name ? 1 : -1)) // sort by name
          .map((movie) => {
            return (
              <div className="card">
                <h3>{movie.name}</h3>
                <p>{movie.genre}</p>
                <div className="button_container_2">
                  <button className="edit">
                    <FaEdit />
                  </button>
                  <button
                    className="delete"
                    onClick={(e) => deleteMovie(movie.id)}
                  >
                    <FaTimes />
                  </button>
                </div>

                <img src={movie.image} alt="" />
              </div>
            );
          })}
      </div>
    </>
  );
}
