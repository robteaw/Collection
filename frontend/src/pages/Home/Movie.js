import React, { useState, useEffect } from "react";
import Axios from "axios";
import { FaSearch, FaTimes } from "react-icons/fa";

export default function Movie() {
  const [listOfMovies, setListOfMovies] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/getMovies").then((response) => {
      setListOfMovies(response.data);
    });
  }, []);

  // Filter search
  const [filter, setFilter] = useState("");

  const searchText = (e) => {
    setFilter(e.target.value);
  };

  let dataSearch = listOfMovies.filter((movie) => {
    return Object.keys(movie).some((key) =>
      movie[key]
        .toString()
        .toLowerCase()
        .includes(filter.toString().toLowerCase())
    );
  });

    // Clear search
    const clearInput = () => {
      setFilter("");
    };
  

  return (
    <>
      <div className="search_bar">
        <button className="search">
          <FaSearch />
        </button>
        <input
          type="text"
          placeholder=" Search"
          value={filter}
          onChange={searchText.bind(this)}
        />
        <button className="delete" onClick={clearInput}>
          <FaTimes />
        </button>
      </div>
      <div className="card_container">
        {dataSearch.map((movie) => {          
          // .sort((a, b) => (a.name > b.name ? 1 : -1)) // sort by name
          // .map((movie) => {
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
