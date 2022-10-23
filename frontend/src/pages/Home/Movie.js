import React, { useState, useEffect } from "react";
import Axios from "axios";
import { FaTimes } from "react-icons/fa";
import "../../index.css";
import ReactPaginate from "react-paginate";

export default function Movie() {
  const [listOfMovies, setListOfMovies] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/getMovies/").then((response) => {
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

  // Paginations
  const [pageNumber, setPageNumber] = useState(0);

  const moviesPerPage = 12;
  const pagesVisited = pageNumber * moviesPerPage;

  const displayMovies = dataSearch
    .slice(pagesVisited, pagesVisited + moviesPerPage)
    .sort((a, b) => (a.name > b.name ? 1 : -1)) // sort by name
    .map((movie) => {
      return (
        <div className="card">
          <h3>{movie.name}</h3>
          <p>{movie.genre}</p>
          <img src={movie.image} alt="" />
        </div>
      );
    });

  const pageCount = Math.ceil(listOfMovies.length / moviesPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  // Clear search
  const clearInput = () => {
    setFilter("");
  };

  return (
    <>
      <div className="search_bar">
        <input
          type="text"
          placeholder=" Search" // &#x1F50E;&#xFE0E;
          value={filter}
          onChange={searchText.bind(this)}
        />
        <button className="delete" onClick={clearInput}>
          <FaTimes />
        </button>
      </div>
      <div className="card_container">{displayMovies}</div>

      <div>
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"paginateBtn"}
          previousLinkClassName={"previousBtn"}
          nextLinkClassName={"nextBtn"}
          disabledClassName={"paginateDisabled"}
          activeClassName={"paginateActive"}
        />
      </div>
    </>
  );
}
