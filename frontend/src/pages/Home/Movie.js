import React, { useState, useEffect } from "react";
import Axios from "axios";
import { FaTimes } from "react-icons/fa";
import ReactPaginate from "react-paginate";

export default function Movie() {
  const [listOfMovies, setListOfMovies] = useState(Object.slice(0, 15));

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

  // Paginations
  const [pageNumber, setPageNumber] = useState(0);

  const moviesPerPage = 15;
  const pagesVisited = pageNumber * listOfMovies;

  const displayMovies = listOfMovies
    .slice(pagesVisited, pagesVisited + moviesPerPage)
    .map((movie) => {
      return (
        <div className="card">
          <h3>{movie.name}</h3>
          <p>{movie.genre}</p>
          <img src={movie.image} alt="" />
        </div>
      );
    });

  const pageCount = Math.ceil(movies.length / moviesPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <>
      <div className="search_bar">
        <input
          type="text"
          placeholder="🔍 Search"
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
          return;

          {
            displayMovies;
          }

          <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"paginateBtn"}
            previousLinkClassName={"previousBtn"}
            nextLinkClassName={"nextBtn"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}
          />;
        })}
      </div>
    </>
  );
}
